import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import { PropTypes } from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

class NewsItems extends Component {
  // Props Type <Setting>
  static propTypes = {
    country: PropTypes.string,
    api: PropTypes.string,
    category: PropTypes.string,
  };
  static defaultProps = {
    country: "in",
    category: "general",
    // apiKey: "7e735a0c4ef14523b9c49d24eec9f299"
  };

  constructor(props) {
    super();
    this.state = {
      articles: [],
      page: 1,
      pageSize: 15,
      loading: true,
      query: "",
    };
    document.title = `All ${props.category
      .split("")
      .map((elem, index) => (index === 0 ? elem.toUpperCase() : elem))
      .join("")} news - ApniNews`;
  }

  async componentDidMount() {
    this.updateNews();
  }
    async updateNews() {
        this.props.progress(10);
        this.setState({ loading: true });
        const url = await !this.props.query ?
            `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.state.pageSize}` :
            `https://newsapi.org/v2/top-headlines?q=${this.props.query}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.state.pageSize}`
    this.props.progress(30);
    let data = await fetch(url).then((res) => res.json());
    this.props.progress(70);
    this.setState({
      articles: data.articles,
      loading: false,
      totalResult: data.totalResults,
    });
    this.props.progress(100);
  }
  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.state.pageSize}`;
    let data = await fetch(url).then((res) => res.json());
    this.setState({
      articles: this.state.articles.concat(data.articles),
      loading: false,
      totalResult: data.totalResults,
    });
  };

  render() {
    return (
      <>
        {/* {this.state.loading && <Spinner />} */}
        <h1 className="fw-bolder text-center my-3">
          Top Headlines from{" "} 
                <span className="text-success">{ !this.props.query ? this.props.category : this.props.query}</span>
        </h1>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResult}
          loader={<Spinner />}
          endMessage={<h3 className="my-3 text-center">That's All</h3>}
        >
          <div className="container">
            <div className="row justify-content-center justify-sm-content-evenly">
              {this.state.articles.map((element) => {
                return (
                  <div
                    key={element.url}
                    className="col-10 col-md-3 col-sm-5 m-2"
                  >
                    <NewsItem
                      author={element.author}
                      date={element.publishedAt}
                      title={element.title}
                      description={element.description}
                      src={element.urlToImage}
                      href={element.url}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default NewsItems;
