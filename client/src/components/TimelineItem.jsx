// One entry in a dated list (a role, a degree): title and subtitle on the left, period on the right.
const TimelineItem = ({ title, subtitle, period, children }) => (
  <li className="grid gap-x-6 gap-y-1 sm:grid-cols-[1fr_auto]">
    <div>
      <h3 className="text-base font-semibold text-fg">{title}</h3>
      <p className="text-sm text-muted">{subtitle}</p>
    </div>
    <p className="text-sm tabular-nums text-muted sm:text-right">{period}</p>
    {children && <div className="mt-3 sm:col-span-2">{children}</div>}
  </li>
);

export default TimelineItem;
