export const getQualityColor = (percentage: number) => {
  if (percentage < 20) return {
    text: 'text-green-600',
    bg: 'bg-green-50',
    rgb: '22 163 74'
  };
  if (percentage < 40) return {
    text: 'text-blue-600',
    bg: 'bg-blue-50',
    rgb: '37 99 235'
  };
  if (percentage < 60) return {
    text: 'text-yellow-600',
    bg: 'bg-yellow-50',
    rgb: '202 138 4'
  };
  if (percentage < 80) return {
    text: 'text-orange-600',
    bg: 'bg-orange-50',
    rgb: '234 88 12'
  };
  return {
    text: 'text-red-600',
    bg: 'bg-red-50',
    rgb: '220 38 38'
  };
};