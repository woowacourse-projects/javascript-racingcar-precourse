export default function hideResultScreen() {
  const $resultScreen = document.querySelector('#app > div:last-child');

  if ($resultScreen.style.display === 'none') {
    return ($resultScreen.style.display = 'inline');
  }
  return ($resultScreen.style.display = 'none');
}
