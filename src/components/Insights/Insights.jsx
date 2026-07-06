import React from "react";
import { Link } from "react-router-dom";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import posts from "../../data/posts";
import "./Insights.css";

const InsightCard = ({ article, delay }) => (
  <div className={`insight-card animate-on-scroll animate-delay-${delay}`}>
    <div className="insight-card__image-wrap">
      <Link to={`/insights/${article.slug}`}>
        <img
          src={article.image}
          alt={article.title}
          className="insight-card__image"
        />
      </Link>
      <span className="insight-card__category">{article.category}</span>
    </div>
    <div className="insight-card__body">
      <span className="insight-card__date">{article.date}</span>
      <h3 className="insight-card__title">
        <Link to={`/insights/${article.slug}`}>{article.title}</Link>
      </h3>
      <Link
        to={`/insights/${article.slug}`}
        className="insight-card__link btn-link-styled"
      >
        Learn more →
      </Link>
    </div>
  </div>
);

const Insights = () => {
  const ref = useScrollAnimation();

  return (
    <section className="insights" id="insights" ref={ref}>
      <div className="container">
        <div className="insights__header animate-on-scroll">
          <span className="section-label">News & Updates</span>
          <h2 className="section-title">Our Insights</h2>
        </div>

        <div className="insights__grid">
          {posts.map((article, i) => (
            <InsightCard key={article.id} article={article} delay={i + 1} />
          ))}
        </div>

        <div className="insights__cta animate-on-scroll">
          <Link to="/#insights" className="btn btn-primary">
            Browse More Insights
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Insights;
