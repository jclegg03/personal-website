import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="max-w-7xl mx-auto flex justify-center space-x-8">
        {/* GitHub */}
        <a
          href="https://github.com/jclegg03"
          target="_blank"
          rel="noopener noreferrer"
          className="">
            <FaGithub />
        </a>
        {/* Linkedin */}
        <a
          href="https://linkedin.com/in/j-clegg/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 flex items-center space-x-2">
            <FaLinkedin />
        </a>
        {/* Email */}
        <a
          href="mailto:jjc2003@byu.edu?body=Hello%20Jay!"
          className="hover:text-blue-400 flex items-center">
            <MdEmail />
        </a>
        </div>
    </footer>
  );
}