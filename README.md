# NewsAppp-Protfolio

📰 News Mobile App

A modern News mobile application built using Flutter, allowing users to read the latest news, browse categories, and stay updated in real-time using API data.

🚀 Features
🔐 User-friendly UI
🗞️ Latest News Headlines
📂 Category-based News (Tech, Sports, Business, etc.)
🔍 Search News (optional)
🔄 Pull to Refresh
🌐 API-based News Fetching
🛠️ Tech Stack
Frontend
Flutter (Dart)
Material UI
Backend / Services
REST API (News API)
HTTP package
📂 Project Structure
news-app/
│── lib/
│   ├── models/       # Data models
│   ├── services/     # API calls
│   ├── screens/      # UI screens
│   ├── widgets/      # Reusable components
│   └── main.dart
│── assets/           # Images
│── pubspec.yaml
│── README.md
⚙️ Installation & Setup
# Clone repo
git clone https://github.com/your-username/news-app.git

cd news-app

# Install dependencies
flutter pub get

# Run app
flutter run
🔑 API Setup

Get your API key from:

👉 https://newsapi.org

Add it in your code:

const apiKey = "YOUR_API_KEY";
💻 Sample Code
1. Fetch News
import 'dart:convert';
import 'package:http/http.dart' as http;

Future<List> fetchNews() async {
  final response = await http.get(
    Uri.parse('https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY'),
  );

  if (response.statusCode == 200) {
    final data = jsonDecode(response.body);
    return data['articles'];
  } else {
    throw Exception('Failed to load news');
  }
}
2. Display News List
ListView.builder(
  itemCount: articles.length,
  itemBuilder: (context, index) {
    return Card(
      child: ListTile(
        title: Text(articles[index]['title']),
        subtitle: Text(articles[index]['source']['name']),
      ),
    );
  },
);
📸 Screenshots

🚀 Deployment
Android: Build APK using Flutter
iOS: Build using Xcode
