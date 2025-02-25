import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-[#F8F9FA] dark:bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Master Social Confidence Through AI-Powered Practice
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Practice real-world conversation skills in a safe, judgment-free environment. 
              Build genuine confidence through interactive AI-powered scenarios.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-[#3D7CF9] hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium">
                Get Started Free
              </button>
              <button className="border border-[#3D7CF9] text-[#3D7CF9] hover:bg-blue-50 px-8 py-3 rounded-full font-medium">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div className="bg-[#F8F9FA] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="bg-[#F8F9FA] dark:bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                <p className="text-gray-600 dark:text-gray-300 mb-4">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

// Feature data
const features = [
  {
    icon: '🎯',
    title: 'Realistic Scenarios',
    description: 'Practice in various real-world settings with AI-powered conversations'
  },
  {
    icon: '🤖',
    title: 'AI Voice Interaction',
    description: 'Natural dialogue with advanced AI for authentic conversation practice'
  },
  {
    icon: '📈',
    title: 'Track Progress',
    description: 'Monitor your improvement with detailed feedback after each interaction'
  }
];

// Testimonial data
const testimonials = [
  {
    text: "This app helped me overcome my social anxiety. I feel much more confident now.",
    name: "Alex M.",
    location: "New York"
  },
  {
    text: "The realistic scenarios made all the difference in my approach to social interactions.",
    name: "James R.",
    location: "London"
  },
  {
    text: "I've seen incredible improvement in my conversation skills in just a few weeks.",
    name: "Michael S.",
    location: "Toronto"
  }
];
