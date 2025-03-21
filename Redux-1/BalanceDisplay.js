function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}
function BalanceDisplay() {
  return <div className="balance">{formatCurrency()}</div>;
}

export default BalanceDisplay;
