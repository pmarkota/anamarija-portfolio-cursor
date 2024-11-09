import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FooterSection } from "../components/FooterSection";
import BlogBackground from "../components/BlogBackground";

const blogPosts = [
  {
    id: 1,
    title: "The Future of UI/UX Design",
    excerpt:
      "Exploring upcoming trends in user interface and experience design for 2024 and beyond.",
    date: "2024-03-15",
    category: "Design",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3",
    tags: ["UI/UX", "Design Trends", "Technology"],
  },
  {
    id: 2,
    title: "Creating Accessible Web Experiences",
    excerpt:
      "Best practices for designing and developing websites that work for everyone.",
    date: "2024-03-10",
    category: "Development",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3",
    tags: ["Accessibility", "Web Development", "Inclusive Design"],
  },
  {
    id: 3,
    title: "The Power of Design Systems",
    excerpt:
      "How design systems can streamline your workflow and improve consistency.",
    date: "2024-03-05",
    category: "Design",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1618788372246-79faff0c3742?ixlib=rb-4.0.3",
    tags: ["Design Systems", "Workflow", "Efficiency"],
  },
  {
    id: 4,
    title: "Mobile-First Design Approach",
    excerpt:
      "Why starting with mobile design leads to better user experiences across all devices.",
    date: "2024-02-28",
    category: "Mobile",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3",
    tags: ["Mobile Design", "Responsive", "UX"],
  },
];

const Blog = () => {
  return (
    <>
      <section className="relative py-32 min-h-screen">
        <div className="absolute inset-0 z-0">
          <BlogBackground />
        </div>
        <div className="relative z-10">
          <div className="container px-4 mx-auto max-w-7xl">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-500 to-violet-600">
                Blog & Insights
              </h1>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Thoughts, insights, and perspectives on design, technology, and
                creative processes.
              </p>
            </motion.div>

            {/* Featured Post */}
            {blogPosts[0] && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-16"
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 rounded-2xl blur-xl transform group-hover:scale-105 transition-transform duration-300" />

                  <div className="relative bg-white dark:bg-dark-primary rounded-2xl overflow-hidden border border-violet-100 dark:border-violet-900 hover:shadow-xl transition-all duration-300">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="relative aspect-video md:aspect-auto">
                        <img
                          src={blogPosts[0].image}
                          alt={blogPosts[0].title}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="p-8 flex flex-col justify-center">
                        <span className="px-3 py-1 text-sm font-medium text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full w-fit mb-4">
                          Featured Post
                        </span>
                        <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">
                          {blogPosts[0].title}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                          {blogPosts[0].excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
                          <span>
                            {new Date(blogPosts[0].date).toLocaleDateString()}
                          </span>
                          <span>•</span>
                          <span>{blogPosts[0].readTime}</span>
                        </div>
                        <Link
                          to={`/blog/${blogPosts[0].id}`}
                          className="inline-flex items-center px-6 py-3 text-sm font-medium text-white transition-all duration-300 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:from-violet-500 hover:to-fuchsia-400 shadow-lg hover:shadow-xl shadow-violet-500/20 w-fit"
                        >
                          Read More
                          <svg
                            className="w-4 h-4 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Blog Posts Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {blogPosts.slice(1).map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 rounded-2xl blur-xl transform group-hover:scale-105 transition-transform duration-300" />

                  <div className="relative bg-white dark:bg-dark-primary rounded-2xl overflow-hidden border border-violet-100 dark:border-violet-900 hover:shadow-xl transition-all duration-300">
                    <div className="relative overflow-hidden aspect-video">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-violet-900/60 via-violet-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <div className="p-6">
                      <div className="mb-3">
                        <span className="px-3 py-1 text-sm font-medium text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full">
                          {post.category}
                        </span>
                      </div>
                      <h3 className="mb-2 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">
                        {post.title}
                      </h3>
                      <p className="mb-4 text-gray-600 dark:text-gray-300">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>

                      <Link
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-white transition-all duration-300 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:from-violet-500 hover:to-fuchsia-400 shadow-lg hover:shadow-xl shadow-violet-500/20"
                      >
                        Read More
                        <svg
                          className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      <FooterSection />
    </>
  );
};

export default Blog;
