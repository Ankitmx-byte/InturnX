// Anti-Cheat Logger
// Handles logging of suspicious activities and anti-cheat events

class AntiCheatLogger {
  constructor() {
    this.logs = [];
    this.maxLogs = 1000;
    this.socket = null;
  }

  // Initialize logger
  initialize(socket) {
    this.socket = socket;
    console.log('Anti-Cheat logger initialized');
  }

  // Log an event
  log(level, message, data = {}) {
    const logEntry = {
      timestamp: new Date().toISOString(),
      level,
      message,
      data,
      userAgent: navigator.userAgent,
      url: window.location.href,
      sessionId: this.getSessionId()
    };

    // Add to local logs
    this.logs.push(logEntry);

    // Keep only max logs
    if (this.logs.length > this.maxLogs) {
      this.logs.shift();
    }

    // Console log for debugging
    console.log(`[Anti-Cheat ${level.toUpperCase()}] ${message}`, data);

    // Send to server if socket available
    if (this.socket) {
      this.socket.emit('anti-cheat-log', logEntry);
    }

    // Store in localStorage for persistence
    this.persistLogs();
  }

  // Log info level
  info(message, data = {}) {
    this.log('info', message, data);
  }

  // Log warning level
  warn(message, data = {}) {
    this.log('warn', message, data);
  }

  // Log error level
  error(message, data = {}) {
    this.log('error', message, data);
  }

  // Log suspicious activity
  suspicious(message, data = {}) {
    this.log('suspicious', message, { ...data, flagged: true });
  }

  // Get session ID
  getSessionId() {
    let sessionId = sessionStorage.getItem('antiCheatSessionId');
    if (!sessionId) {
      sessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
      sessionStorage.setItem('antiCheatSessionId', sessionId);
    }
    return sessionId;
  }

  // Persist logs to localStorage
  persistLogs() {
    try {
      const recentLogs = this.logs.slice(-50); // Keep only recent 50 logs
      localStorage.setItem('antiCheatLogs', JSON.stringify(recentLogs));
    } catch (error) {
      console.warn('Failed to persist anti-cheat logs:', error);
    }
  }

  // Load persisted logs
  loadPersistedLogs() {
    try {
      const persistedLogs = localStorage.getItem('antiCheatLogs');
      if (persistedLogs) {
        const logs = JSON.parse(persistedLogs);
        this.logs = [...logs, ...this.logs].slice(-this.maxLogs);
      }
    } catch (error) {
      console.warn('Failed to load persisted anti-cheat logs:', error);
    }
  }

  // Get all logs
  getLogs(level = null, limit = 100) {
    let filteredLogs = this.logs;

    if (level) {
      filteredLogs = filteredLogs.filter(log => log.level === level);
    }

    return filteredLogs.slice(-limit);
  }

  // Get suspicious activities
  getSuspiciousActivities(limit = 50) {
    return this.logs
      .filter(log => log.level === 'suspicious' || log.data.flagged)
      .slice(-limit);
  }

  // Clear logs
  clearLogs() {
    this.logs = [];
    localStorage.removeItem('antiCheatLogs');
    console.log('Anti-Cheat logs cleared');
  }

  // Export logs
  exportLogs() {
    const dataStr = JSON.stringify(this.logs, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);

    const exportFileDefaultName = `anti-cheat-logs-${new Date().toISOString().split('T')[0]}.json`;

    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  }

  // Analyze logs for patterns
  analyzeLogs() {
    const analysis = {
      totalLogs: this.logs.length,
      levels: {},
      suspiciousCount: 0,
      timeRange: {
        start: this.logs.length > 0 ? this.logs[0].timestamp : null,
        end: this.logs.length > 0 ? this.logs[this.logs.length - 1].timestamp : null
      },
      patterns: {}
    };

    this.logs.forEach(log => {
      // Count levels
      analysis.levels[log.level] = (analysis.levels[log.level] || 0) + 1;

      // Count suspicious
      if (log.level === 'suspicious' || log.data.flagged) {
        analysis.suspiciousCount++;
      }

      // Detect patterns (simplified)
      if (log.message.includes('Face not detected')) {
        analysis.patterns.faceDetectionIssues = (analysis.patterns.faceDetectionIssues || 0) + 1;
      }
      if (log.message.includes('Tab/window not visible')) {
        analysis.patterns.tabSwitches = (analysis.patterns.tabSwitches || 0) + 1;
      }
    });

    return analysis;
  }
}

// Export singleton instance
const antiCheatLogger = new AntiCheatLogger();
export default antiCheatLogger;
