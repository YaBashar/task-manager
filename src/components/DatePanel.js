export function DatePanel() {
  const date = new Date();
  return (
    <div className="datePanel">
      <p>Welcome</p>
      <p>Today is {date.toDateString()}</p>
    </div>
  );
}
