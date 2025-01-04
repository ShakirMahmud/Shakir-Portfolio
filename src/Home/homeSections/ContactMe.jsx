import { motion } from "framer-motion";
import { Mail, MapPin, Phone, MessageSquare } from "lucide-react";
import { useContext, useState } from "react";
import { RefContext } from "../../context/RefContext";

const ContactMe = () => {
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [response, setResponse] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const res = await fetch("https://formspree.io/f/movvpwyw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setResponse("Message sent successfully!");
        setFormData({ email: "", message: "" });
      } else {
        setResponse("Failed to send the message. Please try again.");
      }
    } catch (err) {
      setResponse("An error occurred. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  const {contactRef} = useContext(RefContext);
  return (
    <div ref={contactRef} className="lg:py-24 py-16 bg-neutral-900 overflow-x-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="bg-gradient-to-r from-primary-400 to-accent-400 text-transparent bg-clip-text text-3xl lg:text-4xl font-bold text-center mb-4">
            Contact <span className="text-primary-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-12" />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-neutral-800/50 p-2 lg:p-8 rounded-xl shadow-lg border border-neutral-700"
          >
            <h3 className="text-xl font-semibold text-primary-400 mb-6">
              Send Me a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <label className="block text-gray-400 mb-2">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-neutral-900 border border-neutral-700 rounded-md p-3 text-gray-300 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none"
                  placeholder="you@example.com"
                />
              </div>
              <div className="relative">
                <label className="block text-gray-400 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  className="w-full bg-neutral-900 border border-neutral-700 rounded-md p-3 text-gray-300 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              <motion.button
                type="submit"
                disabled={isSending}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-md py-3 shadow-lg hover:from-primary-600 hover:to-accent-600 transition-all duration-300"
              >
                {isSending ? "Sending..." : "Send Message"}
              </motion.button>
              {response && (
                <p
                  className={`mt-4 text-sm ${
                    response.includes("successfully")
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {response}
                </p>
              )}
            </form>
          </motion.div>

          {/* Right: Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-neutral-800/50 p-2 lg:p-8  rounded-xl shadow-lg border border-neutral-700"
          >
            <h3 className="text-xl font-semibold text-primary-400 mb-6">
              Contact Information
            </h3>
            <ul className="space-y-6">
              <li className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-primary-500" />
                <span className="text-gray-300">Modhubag, Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-primary-500" />
                <a
                  href="tel:+8801931762757"
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  01931762757
                </a>
              </li>
              <li className="flex items-center gap-4">
                <MessageSquare className="w-6 h-6 text-primary-500" />
                <a
                  href="https://wa.me/8801931762757"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  WhatsApp Me
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-primary-500" />
                <a
                  href="mailto:shakirmahmud50@gmail.com"
                  className="text-gray-300 hover:text-primary-400 transition-colors  break-word"
                >
                  shakirmahmud50@gmail.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
