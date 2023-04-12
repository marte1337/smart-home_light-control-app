import Link from "../components/Link";
import QuickActions from "../components/QuickActions";

export default function Actions({
  handleAllOn,
  handleAllOff,
  checkAllOff,
  checkAllOn,
}) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>Quick Actions</h1>
      <QuickActions
        onAllOn={handleAllOn}
        onAllOff={handleAllOff}
        checkAllOff={checkAllOff}
        checkAllOn={checkAllOn}
      />
    </>
  );
}
