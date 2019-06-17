/* eslint-disable constructor-super */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import {DefaultButton} from "office-ui-fabric-react";
import {
  PageNotFoundWrapper,
  PageNotFoundContent
} from "./page-not-found.style";

/**
 * 404 Not Found
 */
class PageNotFound extends Component<Props> {
  render() {
    return (
      <PageNotFoundWrapper>
        <PageNotFoundContent>
          <h1>404</h1>
          <h3>Page not found</h3>
          <p>
            요청한 페이지를 찾을 수 없습니다.
          </p>
            <Link to="/">
              <DefaultButton>
              홈페이지로 가기
                </DefaultButton>
            </Link>
        </PageNotFoundContent>
      </PageNotFoundWrapper>
    );
  }
}

export default PageNotFound;
