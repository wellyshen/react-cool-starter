export default function detectRequesting(flag: Boolean) {
  return {
    type: 'REQUESTING_SERVER',
    data: flag
  };
}
