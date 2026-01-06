
import React from 'react';
import { SyllabusModule } from './types';
import { 
  Smartphone, 
  Rocket, 
  Layout,
  RefreshCw,
  Zap,
  TestTube2,
} from 'lucide-react';

export const FLUTTER_BLUE = '#02569B';

export const SYLLABUS_MODULES: SyllabusModule[] = [
  {
    id: 'foundations',
    title: 'Foundations of Flutter',
    subtitle: 'Master the mental model of how Flutter draws your UI.',
    items: [
      { 
        title: 'Introduction to Flutter', 
        description: 'Why Flutter is a game-changer for UI development.',
        explanation: 'Think of Flutter as a "Game Engine" for apps. Unlike React Native which talks to standard mobile buttons, Flutter uses its engine (Impeller) to draw every pixel itself. Mental Model: You are not asking the phone to show a button; you are painting the button yourself at 120 frames per second.',
        codeSnippet: '// The simplest possible Flutter app\nimport "package:flutter/material.dart";\n\nvoid main() => runApp(const MaterialApp(\n  home: Center(child: Text("Pixel Perfect UI")),\n));'
      },
      { 
        title: 'Dart Basics', 
        description: 'The simple, powerful language behind the scenes.',
        explanation: 'Dart is designed to be "un-surprising." If you know Java, JS, or C#, you already know 80% of Dart. It uses "Sound Null Safety," meaning the compiler helps you catch those annoying "undefined" or "null" errors before you even run the app.',
        codeSnippet: 'void main() {\n  // Mental Model: Variables are boxes.\n  // String? means the box can be empty (null).\n  String? user = "Flutter Hero";\n\n  // Arrow functions are shortcuts for simple logic\n  final greet = (String name) => "Hello, $name!";\n\n  print(greet(user ?? "Guest"));\n}'
      },
      { 
        title: 'Widgets', 
        description: 'Stateless vs. Stateful: The building blocks.',
        explanation: 'Mental Model: A Widget is a "Blueprints" (Stateless) or a "Machine" (Stateful). Stateless widgets never change once drawn. Stateful widgets have a "brain" (State object) that remembers information (like a counter value) and tells the widget to repaint when that info changes.',
        codeSnippet: 'class MyBlueprint extends StatelessWidget {\n  const MyBlueprint({super.key});\n\n  @override\n  Widget build(context) => const Text("I never change!");\n}\n\n// setState() is the "REPAINT" button for Stateful widgets\nsetState(() => _counter++);'
      },
      { 
        title: 'Layouts', 
        description: 'Row, Column, and Stack: Positioning everything.',
        explanation: 'Flutter uses a "Flex Box" style layout. Row = Horizontal, Column = Vertical. Mental Model: Imagine invisible boxes inside boxes. Use "Expanded" to tell a box to take up all the leftover space, or "Stack" to put one thing on top of another (like text over an image).',
        codeSnippet: 'Column(\n  children: [\n    const Text("Top Item"),\n    Expanded(\n      child: Container(color: Colors.blue), // Takes all remaining space\n    ),\n    Row(\n      mainAxisAlignment: MainAxisAlignment.spaceBetween,\n      children: [const Icon(Icons.star), const Text("Bottom Row")],\n    ),\n  ],\n)'
      },
      { 
        title: 'Custom Widgets', 
        description: 'Don\'t Repeat Yourself (DRY) in UI.',
        explanation: 'Mental Model: If you use the same style of button or card twice, make it a Custom Widget. It works like a "Stamp." You define the shape once and then "stamp" it wherever you need with different colors or text.',
        codeSnippet: 'class StyledCard extends StatelessWidget {\n  final String title;\n  const StyledCard({required this.title});\n\n  @override\n  Widget build(context) {\n    return Card(\n      child: Padding(\n        padding: const EdgeInsets.all(8),\n        child: Text(title),\n      ),\n    );\n  }\n}'
      }
    ]
  },
  {
    id: 'core-logic',
    title: 'App Core & Logic',
    subtitle: 'Managing data flow and navigating between views.',
    items: [
      { 
        title: 'State Management', 
        description: 'Moving data from Screen A to Screen B.',
        explanation: 'Mental Model: State Management is the "Shared Brain" of your app. Instead of passing data manually down 10 levels of widgets (Prop Drilling), you put data in a "Provider" or "Riverpod" container that any widget can reach out and touch instantly.',
        codeSnippet: 'class UserData extends ChangeNotifier {\n  String username = "";\n  void update(String name) {\n    username = name;\n    notifyListeners(); // Tells everyone to wake up and rebuild\n  }\n}\n\n// Any widget can now listen:\nfinal name = context.watch<UserData>().username;'
      },
      { 
        title: 'Navigation', 
        description: 'The "Stack" of screens.',
        explanation: 'Mental Model: Imagine a deck of cards. Navigating "Push" puts a new card on top. "Pop" throws the top card away to reveal the one below it. Flutter 2.0 (Router) allows you to define this deck based on your app\'s URL or current data state.',
        codeSnippet: 'Navigator.push(\n  context,\n  MaterialPageRoute(builder: (context) => const DetailPage()),\n);\n\n// Or using go_router for web-friendly URLs:\ncontext.go("/details/123");'
      },
      { 
        title: 'Working with Async', 
        description: 'Waiting for data without freezing the UI.',
        explanation: 'Mental Model: An "Async" function is like a "Waiter." You place an order (API call), and the waiter walks away so you can keep talking (UI stays interactive). When the food is ready (Future completes), the waiter brings it back to your table.',
        codeSnippet: 'Future<void> loadUser() async {\n  print("Loading...");\n  // This "awaits" without locking the app\n  final data = await api.getUser(); \n  print("Finished: $data");\n}'
      },
      { 
        title: 'Handling Forms', 
        description: 'Validating and submitting user input.',
        explanation: 'Mental Model: A Form is a "Security Gate." It checks every input field before letting the data pass through to your backend. We use "GlobalKeys" to talk to the form from outside and tell it to "Validate yourself now!"',
        codeSnippet: 'final _gateKey = GlobalKey<FormState>();\n\nForm(\n  key: _gateKey,\n  child: TextFormField(\n    validator: (value) => value!.length < 3 ? "Too short!" : null,\n  ),\n);\n\n// Check the gate:\nif (_gateKey.currentState!.validate()) { /* Submit */ }'
      },
      { 
        title: 'State Restoration', 
        description: 'Don\'t let the app forget where it was.',
        explanation: 'Mental Model: A "Bookmark." If the phone kills your app to save battery, State Restoration automatically opens the app back to the exact page and scroll position the user was on. Essential for high-quality professional apps.',
        codeSnippet: 'class MyRestorableInt extends RestorableInt {\n  MyRestorableInt() : super(0);\n}\n// Register this bookmark in your State object...'
      }
    ]
  },
  {
    id: 'data-networking',
    title: 'Data & Networking',
    subtitle: 'Connecting your app to the internet and local databases.',
    items: [
      { 
        title: 'Networking', 
        description: 'Talking to the internet with HTTP.',
        explanation: 'Mental Model: Your app is a "Client" sending "Letters" (Requests) to a "Server." The server sends back a "Package" (Response). We use packages like "Dio" or "Http" to handle the mailing, the stamps (Headers), and the address (URLs).',
        codeSnippet: 'final response = await dio.get("https://api.com/users");\nif (response.statusCode == 200) {\n  print("Got data: ${response.data}");\n}'
      },
      { 
        title: 'JSON Serialization', 
        description: 'Translating computer talk to app objects.',
        explanation: 'Mental Model: JSON is like a "CSV or Spreadsheet." Dart objects are "Custom Structures." Serialization is the "Translator" that takes raw text and turns it into something your app can easily understand and work with.',
        codeSnippet: 'class User {\n  final String name;\n  User.fromJson(Map<String, dynamic> json) : name = json["name"];\n  // Translator logic above turns Map -> Object\n}'
      },
      { 
        title: 'Database Integration', 
        description: 'Saving data so it works offline.',
        explanation: 'Mental Model: A "Filing Cabinet." Use SQLite for big, relational data (like a library) or Hive for fast, simple data (like user settings). Storing data locally ensures your app works even on an airplane or in a tunnel.',
        codeSnippet: 'var box = await Hive.openBox("settings");\nawait box.put("theme", "dark");\nprint(box.get("theme"));'
      },
      { 
        title: 'Working with APIs', 
        description: 'RESTful patterns and status codes.',
        explanation: 'Mental Model: A "Menu" at a restaurant. GET means "I want to see the menu." POST means "I want to place an order." PUT means "I want to change my order." DELETE means "I want to cancel."',
        codeSnippet: '// REST methods mapping\nhttp.get(url);   // Read\nhttp.post(url);  // Create\nhttp.put(url);   // Update\nhttp.delete(url);// Remove'
      },
      { 
        title: 'RESTful API Integration', 
        description: 'Mapping your UI to backend data.',
        explanation: 'Integration is the bridge. You map your "Profile Screen" to the "/profile" endpoint. Always handle errors (like 404 - Not Found) so the app doesn\'t just show a blank white screen when the internet is down.',
        codeSnippet: 'try {\n  await api.updateProfile(user);\n} catch (e) {\n  showSnackBar("Failed to save changes!");\n}'
      }
    ]
  },
  {
    id: 'advanced-ui',
    title: 'Advanced UI & UX',
    subtitle: 'Polishing your app for a world-class experience.',
    items: [
      { 
        title: 'Animations & Transitions', 
        description: 'Smooth movement between states.',
        explanation: 'Mental Model: "Tween" (Short for In-Between). You tell Flutter: "Start at 0 and end at 100." Flutter calculates all the numbers in-between (0.1, 0.2, etc.) and draws them so fast it looks like a smooth sliding motion.',
        codeSnippet: 'AnimatedContainer(\n  duration: const Duration(milliseconds: 300),\n  width: isExpanded ? 200 : 100,\n  color: Colors.blue,\n)'
      },
      { 
        title: 'Graphics & Animation', 
        description: 'Custom Painters: Drawing without widgets.',
        explanation: 'Mental Model: A "Blank Canvas." When a Row or Column isn\'t enough (like for a complex chart), you pick up a digital "Paint Brush" and tell Flutter exactly where to draw every line, curve, and circle.',
        codeSnippet: 'canvas.drawCircle(Offset(50, 50), 20, Paint()..color = Colors.red);'
      },
      { 
        title: 'Internationalization', 
        description: 'Making your app speak every language.',
        explanation: 'Mental Model: "Labels." Instead of writing "Hello" in your code, you write a "Key" like "greeting." Depending on the user\'s phone setting, Flutter swaps the Key for the correct word in Spanish, French, or Japanese.',
        codeSnippet: 'Text(AppLocalizations.of(context)!.helloWorld);'
      },
      { 
        title: 'Accessibility', 
        description: 'Inclusive design for everyone.',
        explanation: 'Mental Model: "Alt Text." Blind users use screen readers. Flutter lets you label icons and images with "Semantics" so the phone can read out "Login Button" instead of just saying "Icon 504."',
        codeSnippet: 'Semantics(\n  label: "Tap to buy this item",\n  child: MyCustomBuyButton(),\n)'
      },
      { 
        title: 'Localization', 
        description: 'Date formats, currencies, and RTL support.',
        explanation: 'Localization is more than just translation. It\'s about flipping the whole UI for languages that read Right-to-Left (RTL) like Arabic, and using the correct "$" or "€" symbols automatically.',
        codeSnippet: 'DateFormat.yMMMd().format(DateTime.now()); // Oct 24, 2024'
      }
    ]
  },
  {
    id: 'ecosystem',
    title: 'Ecosystem & Architecture',
    subtitle: 'Structuring for professional growth and scale.',
    items: [
      { 
        title: 'Firebase Integration', 
        description: 'Google\'s powerhouse backend.',
        explanation: 'Mental Model: "Lego Backend." Firebase gives you pre-built blocks for Login, Database, and Storage. You just snap them into your app without writing a single line of server-side Node.js or Python code.',
        codeSnippet: 'await FirebaseAuth.instance.signInWithEmailAndPassword(\n  email: "me@app.com", password: "123");'
      },
      { 
        title: 'Flutter Architecture', 
        description: 'Clean code for big teams.',
        explanation: 'Mental Model: "Separation of Concerns." Don\'t put your API code inside your Button code. Keep your Data, Logic, and UI in three separate folders so you can change one without breaking the others.',
        codeSnippet: '// UI -> Controller -> Repository -> Data Source\n// This path keeps things organized!'
      },
      { 
        title: 'Package Management', 
        description: 'Leveraging the Flutter community.',
        explanation: 'Mental Model: "Don\'t reinvent the wheel." If you need a camera or a map, there is likely a package on pub.dev. Use "pubspec.yaml" to manage these versions so your app stays stable.',
        codeSnippet: 'dependencies:\n  camera: ^0.10.0\n  google_maps_flutter: any'
      },
      { 
        title: 'Security Best Practices', 
        description: 'Protecting user data and keys.',
        explanation: 'Mental Model: "Lock and Key." Never store passwords in plain text. Use "Secure Storage" which uses the phone\'s hardware-encrypted chips (Keychain/Keystore) to keep sensitive info safe from hackers.',
        codeSnippet: 'const storage = FlutterSecureStorage();\nawait storage.write(key: "jwt", value: token);'
      },
      { 
        title: 'Dependency Management', 
        description: 'Managing shared instances.',
        explanation: 'Mental Model: "The Toolbelt." Instead of creating a new API connector every time you need one, you "Inject" a single shared one. This saves memory and makes your app much easier to test.',
        codeSnippet: 'final api = GetIt.instance<ApiService>();\napi.getData();'
      }
    ]
  },
  {
    id: 'quality',
    title: 'Quality & Shipping',
    subtitle: 'From a local project to millions of users.',
    items: [
      { 
        title: 'Testing Flutter Apps', 
        description: 'Building apps that don\'t break.',
        explanation: 'Mental Model: "The Robot Inspector." Write code that pretends to be a user and taps buttons for you. If a button doesn\'t work, the test fails, saving you from shipping a broken app to customers.',
        codeSnippet: 'testWidgets("Find title", (tester) async {\n  await tester.pumpWidget(const MyApp());\n  expect(find.text("Welcome"), findsOneWidget);\n});'
      },
      { 
        title: 'Performance Optimization', 
        description: 'Reducing "Jank" and app size.',
        explanation: 'Mental Model: "The Weight Lifter." Every time your build() method runs, Flutter is lifting weight. Use "const" to tell Flutter: "This widget never changes, so don\'t worry about lifting it again!" This keeps your app buttery smooth.',
        codeSnippet: '// ALWAYS use const where possible\nconst Text("I am efficient");'
      },
      { 
        title: 'Debugging & Error Handling', 
        description: 'Finding the needle in the haystack.',
        explanation: 'Mental Model: "The Detective." Use DevTools to peek inside the app while it\'s running. If an error happens, use "Try/Catch" to show a friendly error message instead of letting the app crash.',
        codeSnippet: 'try {\n  await callApi();\n} catch (e) {\n  logger.error("API failed: $e");\n}'
      },
      { 
        title: 'Deployment', 
        description: 'Building for App Stores.',
        explanation: 'Mental Model: "The Factory Line." To ship to Apple or Google, you must "Sign" your app with a digital certificate and create an "App Bundle" (.aab) which is a compressed version of your app optimized for the store.',
        codeSnippet: 'flutter build appbundle --release\n# This creates the final production file'
      },
      { 
        title: 'Publishing', 
        description: 'Managing the release cycle.',
        explanation: 'Mental Model: "The Launch Pad." Use "Staged Rollouts" to send your update to only 1% of users first. If they don\'t report any bugs, you send it to the other 99%. This minimizes risk during big updates.',
        codeSnippet: '// Pro tip: automate this using "Fastlane" \n// to upload to both stores with one click.'
      }
    ]
  }
];

export const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  foundations: <Smartphone className="w-8 h-8 text-sky-400" />,
  'core-logic': <Layout className="w-8 h-8 text-sky-400" />,
  'data-networking': <RefreshCw className="w-8 h-8 text-sky-400" />,
  'advanced-ui': <Zap className="w-8 h-8 text-sky-400" />,
  ecosystem: <TestTube2 className="w-8 h-8 text-sky-400" />,
  quality: <Rocket className="w-8 h-8 text-sky-400" />,
};
