export function CurrentDate() {
  const date = new Date();

  return (
    <p className="w-full mt-4 mb-4 text-sm">
      {date.toLocaleDateString('en-GB', { dateStyle: 'long'})}
    </p>
  )
}
