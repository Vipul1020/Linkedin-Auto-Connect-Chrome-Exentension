
# LinkedIn Connect All - Chrome Extension

🚀 Automatically connect with multiple LinkedIn profiles with one click!
This Chrome extension helps you streamline your LinkedIn networking by automatically clicking the "Connect" buttons for all visible profiles on a LinkedIn page. Whether you're expanding your professional network, looking for new opportunities, or growing your influence, this tool will save you time and effort by allowing you to send multiple connection requests with just a single click.

🔥 Features
-- 
- Auto-Connect: Automatically clicks all "Connect" buttons for visible LinkedIn profiles on the page.
- Real-time Detection: The extension observes page changes and dynamically detects new "Connect" buttons when new profiles appear (e.g., when scrolling).
- Manual Trigger: Press a single "Connect with All" button to send connection requests to all profiles on the page.
- Timeout Between Clicks: Prevents excessive requests by introducing a customizable delay between connection requests (default is 2 seconds).
- Error Handling: Safely handles scenarios where buttons may become unavailable or disabled.
- User-friendly Interface: A clean, simple button interface with easy accessibility on the page.
🛠️ Technologies Used
-- 
- JavaScript (ES6+): Core functionality and logic.
- React: To render the "Connect with All" button and manage state efficiently.
- MutationObserver API: For dynamically observing and responding to changes in the LinkedIn DOM (e.g., detecting newly loaded profiles as you scroll).
- Chrome Extensions API: To create the Chrome extension and inject the functionality into LinkedIn's web pages.
- HTML/CSS: For the front-end rendering of the extension's interface.
📦 Installation
--
- Clone the repository or download the ZIP file.

- bash
- Copy code :
git clone https://github.com/Vipul1020/Linkedin-Connect-All-Chrome-Extension.git
- Open Chrome and navigate to chrome://extensions/.

- Enable Developer Mode in the top right corner.

- Click on "Load unpacked" and select the folder where you cloned/downloaded the extension.

- Select the "Dist" folder and press OK. 

- The extension will now be installed and visible in the toolbar. You can pin it for easier access!

💻 Usage
--
- Open LinkedIn and navigate to https://www.linkedin.com/mynetwork/grow/ page displaying profiles (e.g., search results, "People you may know").

- Scroll to load more profiles, if necessary. The extension automatically detects visible "Connect" buttons.

- Click the "Connect with All" button added by the extension. It will send connection requests for all detected profiles.

- Watch the magic happen as the extension processes each request, logging each successful connection attempt.

⚙️ Configuration
--
- Custom Timeout: You can modify the delay between connection attempts (currently set to 2 seconds) by editing the setTimeout value in content.js: 
- Copy code :
- setTimeout(() => { ... }, index * 2000);  // Modify 2000 for different delays

🤝 Contributing
--
Contributions, issues, and feature requests are welcome! Feel free to check out the issues page.

- Fork the project.
- Create your feature branch (git checkout -b feature/your-feature).
- Commit your changes (git commit -m 'Add some feature').
- Push to the branch (git push origin feature/your-feature).
- Open a pull request.

📜 License
-- 
This project is licensed under the MIT License - see the LICENSE file for details.
