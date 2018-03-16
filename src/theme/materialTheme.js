import { blueGrey, red } from 'material-ui/colors/index';
import { createMuiTheme } from 'material-ui/styles/index';

const theme = createMuiTheme({
  palette: {
    primary: blueGrey,
    accent: red,
    type: 'light'
  }
});

export default theme;
