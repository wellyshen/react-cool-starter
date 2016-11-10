// Modified from FB's create-react-app

import path from 'path';
import { execSync } from 'child_process';
import opn from 'opn';

export default (port) => {
  if (process.platform === 'darwin') {
    try {
      // Try our best to reuse existing tab
      // on OS X Google Chrome with AppleScript
      execSync('ps cax | grep "Google Chrome"');
      execSync(
        `osascript ${path.join(__dirname, './openChrome.applescript')} http://localhost:${port}/`,
      );
      return true;
    } catch (err) {
      // Ignore errors.
    }
  }
  // Fallback to opn
  try {
    opn(`http://localhost:${port}/`);
    return true;
  } catch (err) {
    return false;
  }
};
