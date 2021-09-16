import { Fragment } from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import classes from "../css/PaginationButtons.module.css";

const PaginationButtons = ({ isPreviousData, page, setPage, data }) => {
  return (
    <div className={classes.buttonComponent}>
      {data && (
        <Fragment>
          
          <button
            className="btn"
            onClick={() => setPage((old) => Math.max(old - 1, 1))}
            disabled={page === 1}
          >
            <ArrowLeftOutlined />
          </button>{" "}
          <p className={classes.pageNumber}>Page {page} on {data.total_pages}</p>
          
          <button
            className="btn"
            onClick={() => {
              if (!isPreviousData && data.total_pages >= page) {
                setPage((old) => old + 1);
              }
            }}
            disabled={isPreviousData || data.total_pages === page}
          >
            <ArrowRightOutlined/>
          </button>
        </Fragment>
      )}
    </div>
  );
};

export default PaginationButtons;
