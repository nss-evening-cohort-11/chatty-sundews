import $ from 'jquery';
import './darkMode.scss';

const makeDark = () => {
  $('body').on('click', '#darkMode', () => {
    if ($('#darkMode').is(':checked')) {
      $('body').attr('data-theme', 'dark');
    }
  });
};

export default { makeDark };
