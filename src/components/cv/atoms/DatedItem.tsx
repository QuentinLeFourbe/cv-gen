import React from "react";
import { css, cx } from "../../../../styled-system/css";

type DatedItemProps = {
  startDate: string;
  endDate?: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  side?: boolean;
};

function DatedItem({
  startDate,
  endDate,
  title,
  subtitle,
  children,
  side = false,
}: DatedItemProps) {
  return (
    <div className={flexRow}>
      {!side && (
        <div className={cx(flexColumn, date)}>
          <p className={noWrap}>{startDate}</p>
          {endDate && <p className={noWrap}>{endDate}</p>}
        </div>
      )}
      <div className={cx(flexColumn, jobContent)}>
        <h4 className={css({ lineHeight: "1.5" })}>{title}</h4>
        {subtitle && <h5>{subtitle}</h5>}
        {side && (
          <div className={hstack}>
            <p className={noWrap}>{startDate}</p>
            {endDate && (
              <>
                <p>-</p>
                <p className={noWrap}> {endDate}</p>
              </>
            )}
          </div>
        )}
        {children}
      </div>
    </div>
  );
}

export default DatedItem;

const date = css({});

const jobContent = css({
  width: "410px",
});

const flexColumn = css({
  display: "flex",
  flexDirection: "column",
  flexWrap: "nowrap",
});

const hstack = css({
  display: "flex",
  flexDirection: "row",
  gap: "0.5rem",
});

const flexRow = css({
  display: "flex",
  flexDirection: "row",
  gap: "28px",
  margin: "1rem 0 1rem 0",

  "& li": {
    listStyle: "square",
  },
  "& ul": {
    margin: "0 0 0 1rem",
  },
});

const noWrap = css({
  whiteSpace: "nowrap",
});
