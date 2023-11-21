import React, { useEffect, useState } from "react";
import { Input, List } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "../styles/explorer.css";
import ResultItem from "../components/resultListItem";

import { getAllData, searchData } from "../utils/apiCalls";

const Explorer = () => {
  const [results, setResults] = useState([]);
  const [showAllResults, setShowAllResults] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 20;

  useEffect(() => {
    fetchEverything();
  }, []);

  const fetchEverything = () => {
    getAllData()
      .then((res) => {
        setResults(res);
        setShowAllResults(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onSearch = () => {
    if (searchValue) {
      searchData(searchValue)
        .then((res) => {
          setResults(res);
          setShowAllResults(false);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      fetchEverything();
    }
  };

  return (
    <div className="explorer-container">
      <div className="search-input-container">
        <Input
          size="large"
          value={searchValue}
          placeholder="Search for your Materials"
          addonBefore="Query"
          onPressEnter={onSearch}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          suffix={<SearchOutlined onClick={onSearch} />}
        />
      </div>

      <div className="results-container">
        <List
          header={
            (showAllResults && `Showing All ${results.length} Results`) ||
            `Showing ${results.length} Searched Results`
          }
          dataSource={results}
          pagination={{
            pageSize: pageSize,
            current: currentPage,
            onChange: (page) => setCurrentPage(page),
          }}
          renderItem={(item) => (
            <List.Item>
              <ResultItem detail={item} />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default Explorer;
