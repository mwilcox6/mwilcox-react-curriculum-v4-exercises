export default function SnackList() {
  const snacks = [
    { name: 'Patty', rank: 5 },
    { name: 'Smoothie', rank: 4 },
    { name: 'Sun Chips ', rank: 3 },
    { name: 'Yogurt Parfait', rank: 2 },
    { name: 'French Fries', rank: 1 },
  ];

  const sortedSnacks = snacks.toSorted((a, b) => a.rank - b.rank);

  return (
    <ol>
      {sortedSnacks.map((snack) => (
        <li key={snack.name}>
          {' '}
          {snack.name} , Rank: {snack.rank}{' '}
        </li>
      ))}
    </ol>
  );
}
