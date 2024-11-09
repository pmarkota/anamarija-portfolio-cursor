import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FooterSection } from "../components/FooterSection";
import BlogPostBackground from "../components/BlogPostBackground";

// Import blog posts data
const blogPosts = [
  {
    id: 1,
    title: "The Future of UI/UX Design",
    excerpt:
      "Exploring upcoming trends in user interface and experience design for 2024 and beyond.",
    content: `
      <p>The landscape of UI/UX design is constantly evolving, shaped by technological advancements, changing user behaviors, and emerging design philosophies. As we look ahead to 2024 and beyond, several key trends are set to define the future of digital experiences.</p>

      <h2>1. AI-Powered Personalization</h2>
      <p>Artificial Intelligence is revolutionizing how we approach personalization in user interfaces. Machine learning algorithms can now analyze user behavior patterns to create truly personalized experiences that adapt in real-time to individual preferences and needs.</p>

      <h2>2. Immersive Experiences</h2>
      <p>With the advancement of technologies like AR and VR, immersive experiences are becoming more mainstream. Designers are exploring new ways to create engaging, multi-sensory interfaces that blur the line between digital and physical worlds.</p>

      <h2>3. Sustainable Design Practices</h2>
      <p>Sustainability in digital design is gaining importance. This includes creating energy-efficient interfaces, optimizing performance, and considering the environmental impact of digital products.</p>

      <h2>Looking Ahead</h2>
      <p>The future of UI/UX design is exciting and full of possibilities. As designers, we must stay adaptable and continue learning to create meaningful experiences that enhance users' lives while being mindful of our impact on the world.</p>
    `,
    date: "2024-03-15",
    category: "Design",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3",
    author: "Anamarija J.",
    tags: ["UI/UX", "Design Trends", "Technology"],
  },
  // Add more blog posts with full content...
];

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((post) => post.id === parseInt(id));

  if (!post) {
    return (
      <>
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-dark-secondary">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Blog post not found
            </h1>
            <Link
              to="/blog"
              className="text-violet-600 dark:text-violet-400 hover:underline"
            >
              Back to Blog
            </Link>
          </div>
        </div>
        <FooterSection />
      </>
    );
  }

  return (
    <>
      <BlogPostBackground />
      <article className="relative min-h-screen bg-gray-50/80 dark:bg-dark-secondary/80 backdrop-blur-sm pt-20">
        {/* Hero Section */}
        <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/30" />
          </div>
          <div className="relative container mx-auto px-4 h-full max-w-4xl flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <span className="inline-block px-3 py-1 text-sm font-medium text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full mb-4">
                {post.category}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                {post.title}
              </h1>
              <div className="flex items-center justify-center gap-4 text-gray-200">
                <span>{post.author}</span>
                <span>•</span>
                <span>{new Date(post.date).toLocaleDateString()}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 max-w-4xl py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-dark-primary rounded-2xl shadow-xl p-8 mb-12"
          >
            <div
              className="prose dark:prose-invert prose-violet max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm text-violet-600 bg-violet-50 dark:bg-violet-900/30 dark:text-violet-300 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <Link
              to="/blog"
              className="inline-flex items-center px-6 py-3 text-sm font-medium text-white transition-all duration-300 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:from-violet-500 hover:to-fuchsia-400 shadow-lg hover:shadow-xl shadow-violet-500/20"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              Back to Blog
            </Link>
          </div>
        </div>
      </article>
      <FooterSection />
    </>
  );
};

export default BlogPost;
