// Anti-Cheat Keyboard Shortcuts
// Handles keyboard shortcuts for anti-cheat system activation

class KeyboardShortcuts {
  constructor(antiCheatSystem, logger) {
    this.antiCheatSystem = antiCheatSystem;
    this.logger = logger;
    this.shortcuts = {
      'Shift+C': this.toggleAntiCheat.bind(this),
      'Shift+X': this.disableAntiCheat.bind(this),
      'Shift+D': this.toggleDevMode.bind(this)
    };
    this.pressedKeys = new Set();
    this.isInitialized = false;
  }

  // Initialize keyboard event listeners
  initialize() {
    if (this.isInitialized) return;

    document.addEventListener('keydown', this.handleKeyDown.bind(this));
    document.addEventListener('keyup', this.handleKeyUp.bind(this));

    this.isInitialized = true;
    console.log('Keyboard shortcuts initialized');
  }

  // Destroy keyboard event listeners
  destroy() {
    if (!this.isInitialized) return;

    document.removeEventListener('keydown', this.handleKeyDown.bind(this));
    document.removeEventListener('keyup', this.handleKeyUp.bind(this));

    this.isInitialized = false;
    console.log('Keyboard shortcuts destroyed');
  }

  // Handle key down events
  handleKeyDown(event) {
    // Prevent default behavior for our shortcuts
    const keyCombo = this.getKeyCombo(event);
    if (this.shortcuts[keyCombo]) {
      event.preventDefault();
      this.pressedKeys.add(event.key.toLowerCase());

      // Execute shortcut if all keys are pressed
      if (this.isShortcutPressed(keyCombo)) {
        this.shortcuts[keyCombo]();
      }
    }
  }

  // Handle key up events
  handleKeyUp(event) {
    this.pressedKeys.delete(event.key.toLowerCase());
  }

  // Get key combination string
  getKeyCombo(event) {
    const keys = [];
    if (event.ctrlKey) keys.push('Ctrl');
    if (event.altKey) keys.push('Alt');
    if (event.shiftKey) keys.push('Shift');
    if (event.metaKey) keys.push('Meta');
    keys.push(event.key.toUpperCase());
    return keys.join('+');
  }

  // Check if shortcut is fully pressed
  isShortcutPressed(shortcut) {
    const keys = shortcut.split('+');
    return keys.every(key => {
      if (key === 'Ctrl') return this.pressedKeys.has('control');
      if (key === 'Alt') return this.pressedKeys.has('alt');
      if (key === 'Shift') return this.pressedKeys.has('shift');
      if (key === 'Meta') return this.pressedKeys.has('meta');
      return this.pressedKeys.has(key.toLowerCase());
    });
  }

  // Toggle anti-cheat system
  toggleAntiCheat() {
    if (!this.canUseAntiCheat()) {
      if (this.logger && this.logger.warn) {
        this.logger.warn('Anti-cheat toggle attempted but not allowed');
      }
      return;
    }

    if (this.antiCheatSystem && this.antiCheatSystem.isActive && this.antiCheatSystem.isActive()) {
      this.disableAntiCheat();
    } else {
      this.enableAntiCheat();
    }
  }

  // Enable anti-cheat system
  enableAntiCheat() {
    if (!this.canUseAntiCheat()) {
      this.logger.warn('Anti-cheat enable attempted but not allowed');
      return;
    }

    try {
      this.antiCheatSystem.enable();
      this.logger.info('Anti-cheat enabled via keyboard shortcut');
      this.showNotification('Anti-Cheat Enabled', 'success');
    } catch (error) {
      this.logger.error('Failed to enable anti-cheat via keyboard shortcut', { error: error.message });
      this.showNotification('Failed to enable Anti-Cheat', 'error');
    }
  }

  // Disable anti-cheat system
  disableAntiCheat() {
    if (!this.canUseAntiCheat()) {
      this.logger.warn('Anti-cheat disable attempted but not allowed');
      return;
    }

    try {
      this.antiCheatSystem.disable();
      this.logger.info('Anti-cheat disabled via keyboard shortcut');
      this.showNotification('Anti-Cheat Disabled', 'info');
    } catch (error) {
      this.logger.error('Failed to disable anti-cheat via keyboard shortcut', { error: error.message });
      this.showNotification('Failed to disable Anti-Cheat', 'error');
    }
  }

  // Toggle developer mode
  toggleDevMode() {
    const currentDevMode = localStorage.getItem('devMode') === 'true';
    const newDevMode = !currentDevMode;

    localStorage.setItem('devMode', newDevMode.toString());

    if (this.logger && this.logger.info) {
      this.logger.info(`Developer mode ${newDevMode ? 'enabled' : 'disabled'} via keyboard shortcut`);
    }

    const message = newDevMode
      ? 'Developer Mode Enabled - Anti-Cheat shortcuts now available in production'
      : 'Developer Mode Disabled - Anti-Cheat shortcuts restricted in production';

    this.showNotification(message, newDevMode ? 'success' : 'info');

    // Reload page to apply changes
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }

  // Check if anti-cheat can be used
  canUseAntiCheat() {
    // Always allow in development (localhost)
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      return true;
    }

    // In production, only allow if devMode is enabled
    return localStorage.getItem('devMode') === 'true';
  }

  // Show notification to user
  showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transition-all duration-300 transform translate-x-full`;

    // Set colors based on type
    const colors = {
      success: 'bg-green-500 text-white',
      error: 'bg-red-500 text-white',
      info: 'bg-blue-500 text-white',
      warn: 'bg-yellow-500 text-black'
    };

    notification.className += ` ${colors[type] || colors.info}`;
    notification.innerHTML = `
      <div class="flex items-center space-x-2">
        <span class="font-semibold">${message}</span>
      </div>
    `;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
      notification.classList.remove('translate-x-full');
    }, 100);

    // Remove after 3 seconds
    setTimeout(() => {
      notification.classList.add('translate-x-full');
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 300);
    }, 3000);
  }

  // Get available shortcuts
  getShortcuts() {
    return Object.keys(this.shortcuts);
  }

  // Check if initialized
  isActive() {
    return this.isInitialized;
  }
}

// Export singleton instance
const keyboardShortcuts = new KeyboardShortcuts();
export default keyboardShortcuts;
