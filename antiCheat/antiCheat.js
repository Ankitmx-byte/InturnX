// Anti-Cheat System for Battle Arena
// This module handles camera monitoring, face detection, screen tracking, and suspicious activity logging

class AntiCheatSystem {
  constructor() {
    this.isEnabled = false;
    this.cameraStream = null;
    this.faceDetectionInterval = null;
    this.screenTrackingInterval = null;
    this.activityLog = [];
    this.socket = null;
  }

  // Initialize anti-cheat system
  async initialize(socket) {
    this.socket = socket;
    console.log('Anti-Cheat system initialized');
  }

  // Enable anti-cheat monitoring
  async enable() {
    if (this.isEnabled) return;

    this.isEnabled = true;
    console.log('Anti-Cheat enabled');

    try {
      // Start camera monitoring
      await this.startCameraMonitoring();

      // Start face detection
      this.startFaceDetection();

      // Start screen tracking
      this.startScreenTracking();

      // Start activity logging
      this.startActivityLogging();

      this.logActivity('Anti-Cheat enabled');
    } catch (error) {
      console.error('Failed to enable anti-cheat:', error);
      this.disable();
    }
  }

  // Disable anti-cheat monitoring
  disable() {
    this.isEnabled = false;
    console.log('Anti-Cheat disabled');

    // Stop camera monitoring
    this.stopCameraMonitoring();

    // Stop face detection
    this.stopFaceDetection();

    // Stop screen tracking
    this.stopScreenTracking();

    // Stop activity logging
    this.stopActivityLogging();

    this.logActivity('Anti-Cheat disabled');
  }

  // Start camera monitoring
  async startCameraMonitoring() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 320, height: 240, facingMode: 'user' }
      });

      this.cameraStream = stream;
      console.log('Camera monitoring started');

      // Send camera events to server
      const video = document.createElement('video');
      video.srcObject = stream;
      video.play();

      // Monitor camera feed for suspicious activity
      setInterval(() => {
        if (this.isEnabled && this.socket) {
          // Send camera frame data (simplified)
          this.socket.emit('anti-cheat-camera', {
            timestamp: Date.now(),
            hasVideo: true
          });
        }
      }, 5000); // Every 5 seconds

    } catch (error) {
      console.error('Camera monitoring failed:', error);
      throw error;
    }
  }

  // Stop camera monitoring
  stopCameraMonitoring() {
    if (this.cameraStream) {
      this.cameraStream.getTracks().forEach(track => track.stop());
      this.cameraStream = null;
      console.log('Camera monitoring stopped');
    }
  }

  // Start face detection
  startFaceDetection() {
    this.faceDetectionInterval = setInterval(() => {
      if (this.isEnabled && this.socket) {
        // Simulate face detection (in production, use face-api.js or similar)
        const faceDetected = Math.random() > 0.1; // 90% chance of face detected

        this.socket.emit('anti-cheat-face', {
          timestamp: Date.now(),
          faceDetected,
          confidence: faceDetected ? Math.random() * 0.3 + 0.7 : 0 // 70-100% confidence
        });

        if (!faceDetected) {
          this.logActivity('Face not detected - potential cheating');
        }
      }
    }, 3000); // Every 3 seconds

    console.log('Face detection started');
  }

  // Stop face detection
  stopFaceDetection() {
    if (this.faceDetectionInterval) {
      clearInterval(this.faceDetectionInterval);
      this.faceDetectionInterval = null;
      console.log('Face detection stopped');
    }
  }

  // Start screen tracking
  startScreenTracking() {
    this.screenTrackingInterval = setInterval(() => {
      if (this.isEnabled && this.socket) {
        // Track tab switches and window focus
        const isVisible = !document.hidden;
        const activeElement = document.activeElement?.tagName || 'unknown';

        this.socket.emit('anti-cheat-screen', {
          timestamp: Date.now(),
          isVisible,
          activeElement,
          tabSwitches: this.detectTabSwitches()
        });

        if (!isVisible) {
          this.logActivity('Tab/window not visible - potential cheating');
        }
      }
    }, 2000); // Every 2 seconds

    console.log('Screen tracking started');
  }

  // Stop screen tracking
  stopScreenTracking() {
    if (this.screenTrackingInterval) {
      clearInterval(this.screenTrackingInterval);
      this.screenTrackingInterval = null;
      console.log('Screen tracking stopped');
    }
  }

  // Start activity logging
  startActivityLogging() {
    // Log mouse movements
    const handleMouseMove = (event) => {
      if (this.isEnabled && this.socket) {
        this.socket.emit('anti-cheat-mouse', {
          timestamp: Date.now(),
          x: event.clientX,
          y: event.clientY
        });
      }
    };

    // Log keyboard activity
    const handleKeyPress = (event) => {
      if (this.isEnabled && this.socket) {
        this.socket.emit('anti-cheat-keyboard', {
          timestamp: Date.now(),
          key: event.key,
          ctrlKey: event.ctrlKey,
          altKey: event.altKey,
          shiftKey: event.shiftKey
        });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('keypress', handleKeyPress);

    // Store references for cleanup
    this.mouseHandler = handleMouseMove;
    this.keyboardHandler = handleKeyPress;

    console.log('Activity logging started');
  }

  // Stop activity logging
  stopActivityLogging() {
    if (this.mouseHandler) {
      document.removeEventListener('mousemove', this.mouseHandler);
      this.mouseHandler = null;
    }

    if (this.keyboardHandler) {
      document.removeEventListener('keypress', this.keyboardHandler);
      this.keyboardHandler = null;
    }

    console.log('Activity logging stopped');
  }

  // Detect tab switches (simplified)
  detectTabSwitches() {
    // In production, use Page Visibility API more comprehensively
    return document.hidden ? 1 : 0;
  }

  // Log suspicious activity
  logActivity(message, severity = 'info') {
    const logEntry = {
      timestamp: Date.now(),
      message,
      severity,
      userAgent: navigator.userAgent,
      url: window.location.href
    };

    this.activityLog.push(logEntry);

    // Keep only last 100 entries
    if (this.activityLog.length > 100) {
      this.activityLog.shift();
    }

    console.log(`[Anti-Cheat ${severity.toUpperCase()}] ${message}`);

    // Send to server if socket available
    if (this.socket) {
      this.socket.emit('anti-cheat-log', logEntry);
    }
  }

  // Get activity logs
  getActivityLogs() {
    return this.activityLog;
  }

  // Check if system is enabled
  isActive() {
    return this.isEnabled;
  }
}

// Export singleton instance
const antiCheatSystem = new AntiCheatSystem();
export default antiCheatSystem;
