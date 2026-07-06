import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faFolder,
  faArrowLeft,
  faArrowRight,
  faShareAlt,
  faClock,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faFacebookF,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import posts from "../data/posts";
import "./BlogPost.css";

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [comment, setComment] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
    save: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const post = posts.find((p) => p.slug === slug);
  const currentIndex = posts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  // Scroll to top on slug change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  // Estimate reading time
  const getReadingTime = (htmlContent) => {
    const text = htmlContent.replace(/<[^>]+>/g, "");
    const words = text.trim().split(/\s+/).length;
    return Math.max(1, Math.ceil(words / 200));
  };

  if (!post) {
    return (
      <div className="blog-post-not-found">
        <div className="container">
          <h1>Post Not Found</h1>
          <p>The article you're looking for doesn't exist or has been moved.</p>
          <Link to="/" className="btn btn-primary">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const readingTime = getReadingTime(post.content);

  const handleCommentChange = (e) => {
    const { name, value, type, checked } = e.target;
    setComment((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setComment({ name: "", email: "", website: "", message: "", save: false });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <article className="blog-post">
      {/* Hero Banner */}
      <div className="blog-post__hero">
        <div className="blog-post__hero-overlay" />
        <img
          src={post.featuredImage}
          alt={post.title}
          className="blog-post__hero-image"
        />
        <div className="blog-post__hero-content">
          <div className="container">
            <Link to="/#insights" className="blog-post__back-link">
              <FontAwesomeIcon icon={faArrowLeft} />
              <span>Back to Insights</span>
            </Link>
            <span className="blog-post__category">{post.category}</span>
            <h1 className="blog-post__title">{post.title}</h1>
            <div className="blog-post__meta">
              <span className="blog-post__meta-item">
                <FontAwesomeIcon icon={faCalendarAlt} />
                {post.date}
              </span>
              <span className="blog-post__meta-item">
                <FontAwesomeIcon icon={faClock} />
                {readingTime} min read
              </span>
              <span className="blog-post__meta-item">
                <FontAwesomeIcon icon={faUser} />
                Alliance Team
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="blog-post__body">
        <div className="container">
          <div className="blog-post__layout">
            {/* Main Content */}
            <div className="blog-post__content">
              <div
                className="blog-post__article-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Share */}
              <div className="blog-post__share">
                <h4>
                  <FontAwesomeIcon icon={faShareAlt} /> Share This Article
                </h4>
                <div className="blog-post__share-icons">
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="share-icon share-icon--linkedin"
                    aria-label="Share on LinkedIn"
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="share-icon share-icon--facebook"
                    aria-label="Share on Facebook"
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="share-icon share-icon--twitter"
                    aria-label="Share on Twitter"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </div>
              </div>

              {/* Post Navigation */}
              <div className="blog-post__nav">
                {prevPost ? (
                  <Link
                    to={`/insights/${prevPost.slug}`}
                    className="blog-post__nav-link blog-post__nav-link--prev"
                  >
                    <FontAwesomeIcon icon={faArrowLeft} />
                    <div>
                      <span className="blog-post__nav-label">Previous</span>
                      <span className="blog-post__nav-title">
                        {prevPost.title}
                      </span>
                    </div>
                  </Link>
                ) : (
                  <div />
                )}
                {nextPost ? (
                  <Link
                    to={`/insights/${nextPost.slug}`}
                    className="blog-post__nav-link blog-post__nav-link--next"
                  >
                    <div>
                      <span className="blog-post__nav-label">Next</span>
                      <span className="blog-post__nav-title">
                        {nextPost.title}
                      </span>
                    </div>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </Link>
                ) : (
                  <div />
                )}
              </div>

              {/* Comments Section */}
              <div className="blog-post__comments">
                <h3 className="blog-post__comments-title">Leave a Reply</h3>

                {submitted && (
                  <div className="blog-post__comment-success">
                    ✓ Your comment has been submitted successfully!
                  </div>
                )}

                <form
                  onSubmit={handleCommentSubmit}
                  className="blog-post__comment-form"
                >
                  <div className="form-group">
                    <label htmlFor="message">
                      Comment <span className="required">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      value={comment.message}
                      onChange={handleCommentChange}
                      required
                      placeholder="Share your thoughts..."
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">
                        Name <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={comment.name}
                        onChange={handleCommentChange}
                        required
                        placeholder="Your name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">
                        Email <span className="required">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={comment.email}
                        onChange={handleCommentChange}
                        required
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="website">Website</label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      value={comment.website}
                      onChange={handleCommentChange}
                      placeholder="https://yourwebsite.com"
                    />
                  </div>

                  <div className="form-group form-group--checkbox">
                    <input
                      type="checkbox"
                      id="save"
                      name="save"
                      checked={comment.save}
                      onChange={handleCommentChange}
                    />
                    <label htmlFor="save">
                      Save my name, email, and website in this browser for the
                      next time I comment.
                    </label>
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Post Comment
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="blog-post__sidebar">
              <div className="sidebar-widget">
                <h3 className="sidebar-widget__title">About Alliance</h3>
                <p className="sidebar-widget__text">
                  Alliance Asset Management is a Zimbabwean investment
                  management firm dedicated to helping clients achieve long term
                  financial success.
                </p>
                <Link
                  to="/#about"
                  className="btn btn-primary sidebar-widget__btn"
                >
                  Learn More
                </Link>
              </div>

              <div className="sidebar-widget">
                <h3 className="sidebar-widget__title">Recent Posts</h3>
                <div className="sidebar-widget__posts">
                  {posts
                    .filter((p) => p.slug !== slug)
                    .map((p) => (
                      <Link
                        key={p.id}
                        to={`/insights/${p.slug}`}
                        className="sidebar-post"
                      >
                        <img
                          src={p.image}
                          alt={p.title}
                          className="sidebar-post__img"
                        />
                        <div className="sidebar-post__info">
                          <span className="sidebar-post__date">{p.date}</span>
                          <span className="sidebar-post__title">{p.title}</span>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>

              <div className="sidebar-widget sidebar-widget--cta">
                <h3 className="sidebar-widget__title">
                  Need Financial Advice?
                </h3>
                <p className="sidebar-widget__text">
                  Speak to one of our experienced advisors today.
                </p>
                <Link
                  to="/#contact"
                  className="btn btn-primary sidebar-widget__btn"
                >
                  Find Advisor
                </Link>
              </div>

              <div className="sidebar-widget">
                <h3 className="sidebar-widget__title">Our Services</h3>
                <ul className="sidebar-widget__list">
                  <li>
                    <Link to="/#services">Equities</Link>
                  </li>
                  <li>
                    <Link to="/#services">Money Market</Link>
                  </li>
                  <li>
                    <Link to="/#services">Advisory</Link>
                  </li>
                  <li>
                    <Link to="/#services">Investments</Link>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
