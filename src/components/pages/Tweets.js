import { Link } from "react-router-dom";
import {
  CardBox,
  Elipse,
  FollowBtn,
  FollowingBtn,
  Follower,
  Logo,
  PhotoBox,
  Picture,
  Rectangle,
  TextBtn,
  Tweet,
  UserFoto,
} from "./Tweets.style";
import useAxios from "../hooks/getData";
import { useState, useEffect } from "react";

const TWEETS_PER_PAGE = 3;

export default function Tweets() {
  const [currentPage, setCurrentPage] = useState(1);
  const [tweets, setTweets] = useState([]);

  const { data, error, loading } = useAxios(
    "https://644eb0e71b4567f4d58dff46.mockapi.io/tweets"
  );

  useEffect(() => {
    if (!loading && data) {
      setTweets(
        data.map((tweet) => {
          const storedTweet = localStorage.getItem(`tweet-${tweet.id}`);
          if (storedTweet) {
            return JSON.parse(storedTweet);
          }
          return tweet;
        })
      );
    }
  }, [data, loading]);

  useEffect(() => {
    tweets.forEach((tweet) => {
      localStorage.setItem(`tweet-${tweet.id}`, JSON.stringify(tweet));
    });
  }, [tweets]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Oops! An error occurred.</div>;
  }

  const totalTweets = tweets.length;
  const totalPages = Math.ceil(totalTweets / TWEETS_PER_PAGE);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleFollowClick = (tweetId) => {
    setTweets((prevState) => {
      return prevState.map((tweet) => {
        if (tweet.id === tweetId) {
          const updatedTweet = {
            ...tweet,
            following: !tweet.following,
            followers: tweet.following
              ? tweet.followers - 1
              : tweet.followers + 1,
          };
          localStorage.setItem(
            `tweet-${updatedTweet.id}`,
            JSON.stringify(updatedTweet)
          );
          return updatedTweet;
        }
        return tweet;
      });
    });
  };

  const renderPageNumbers = () => {
    return Array.from({ length: totalPages }, (_, i) => (
      <li key={i + 1} onClick={() => handleClick(i + 1)}>
        {i + 1}
      </li>
    ));
  };

  const indexOfLastTweet = currentPage * TWEETS_PER_PAGE;
  const indexOfFirstTweet = indexOfLastTweet - TWEETS_PER_PAGE;
  const currentTweets = tweets.slice(indexOfFirstTweet, indexOfLastTweet);

  return (
    <>
      <button>
        <Link to="/">Back</Link>
      </button>
      {currentTweets.map((tweet) => (
        <CardBox key={tweet.id}>
          <Logo />
          <Picture />
          <PhotoBox>
            <Elipse></Elipse>
            <UserFoto src={tweet.avatar}></UserFoto>
            <Rectangle></Rectangle>
          </PhotoBox>
          <Tweet>{tweet.tweets} Tweet</Tweet>
          <Follower>{tweet.followers} Followers</Follower>
          {tweet.following ? (
            <FollowingBtn onClick={() => handleFollowClick(tweet.id)}>
              <TextBtn>Following</TextBtn>
            </FollowingBtn>
          ) : (
            <FollowBtn onClick={() => handleFollowClick(tweet.id)}>
              <TextBtn>Follow</TextBtn>
            </FollowBtn>
          )}
        </CardBox>
      ))}

      {currentPage < totalPages && (
        <button onClick={() => handleClick(currentPage + 1)}>Load more</button>
      )}
      <ul id="page-numbers">{renderPageNumbers()}</ul>
    </>
  );
}
