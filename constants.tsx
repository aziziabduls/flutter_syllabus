
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
    subtitle: 'Building the core mental model of the SDK and Dart.',
    items: [
      { 
        title: 'Introduction to Flutter', 
        description: 'Deep dive into the architecture, engine, and ecosystem.',
        explanation: 'Flutter is Google’s UI toolkit for building natively compiled applications from a single codebase. Unlike other frameworks that wrap native components, Flutter uses its own rendering engine (Impeller/Skia) to draw every pixel. This ensures 60/120 FPS performance and absolute visual consistency across iOS, Android, Web, and Desktop.',
        codeSnippet: 'import "package:flutter/material.dart";\n\nvoid main() {\n  // Entry point of every Flutter application\n  runApp(const MyFirstApp());\n}\n\nclass MyFirstApp extends StatelessWidget {\n  const MyFirstApp({super.key});\n\n  @override\n  Widget build(BuildContext context) {\n    return const MaterialApp(\n      home: Scaffold(body: Center(child: Text("Hello Flutter!"))),\n    );\n  }\n}'
      },
      { 
        title: 'Dart Basics', 
        description: 'Variables, types, control flow, and OOP principles.',
        explanation: 'Dart is the language powering Flutter. It features a sound type system, null safety by default, and a powerful "Hot Reload" capability. Understanding Classes, Mixins, and Extensions is critical for clean Flutter code.',
        codeSnippet: 'void main() {\n  // Null safety: "?" allows null, "!" asserts non-null\n  String? name = "Flutter Engineer";\n  \n  // Object Oriented Programming\n  final user = User(name: name ?? "Guest");\n  user.greet();\n}\n\nclass User {\n  final String name;\n  User({required this.name});\n\n  void greet() => print("Welcome, $name!");\n}'
      },
      { 
        title: 'Widgets', 
        description: 'The "Everything is a Widget" philosophy.',
        explanation: 'Widgets are the building blocks of a Flutter UI. They are immutable descriptions of a part of the user interface. There are two primary types: Stateless (static data) and Stateful (data that changes over time).',
        codeSnippet: 'class SimpleText extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    // Composition over Inheritance\n    return Container(\n      padding: const EdgeInsets.all(16),\n      child: const Text("I am a simple widget"),\n    );\n  }\n}'
      },
      { 
        title: 'Layouts', 
        description: 'Mastering the Flex box model and Constraints.',
        explanation: 'Layout in Flutter works through a simple rule: Constraints go down, Sizes go up, Parent sets position. Master Row (horizontal), Column (vertical), and Stack (layered) to build any design.',
        codeSnippet: 'Column(\n  mainAxisAlignment: MainAxisAlignment.center,\n  children: [\n    const Text("Header"),\n    Row(\n      children: [\n        Expanded(child: Icon(Icons.star)),\n        Expanded(flex: 2, child: Text("Flex allows proportional sizing")),\n      ],\n    ),\n    Stack(\n      children: [Image.network("..."), Center(child: Text("Over Image"))],\n    ),\n  ],\n)'
      },
      { 
        title: 'Custom Widgets', 
        description: 'Abstraction and reusability strategies.',
        explanation: 'Don\'t repeat yourself. Break complex UIs into small, focused custom widgets. This improves readability, makes testing easier, and allows for better performance through selective rebuilds.',
        codeSnippet: 'class PrimaryButton extends StatelessWidget {\n  final String text;\n  final VoidCallback onPressed;\n\n  const PrimaryButton({required this.text, required this.onPressed});\n\n  @override\n  Widget build(BuildContext context) {\n    return ElevatedButton(\n      style: ElevatedButton.styleFrom(backgroundColor: Colors.blue),\n      onPressed: onPressed,\n      child: Text(text),\n    );\n  }\n}'
      }
    ]
  },
  {
    id: 'core-logic',
    title: 'App Core & Logic',
    subtitle: 'Handling state, navigation, and user interaction.',
    items: [
      { 
        title: 'State Management', 
        description: 'Provider, Bloc, Riverpod, and lifting state.',
        explanation: 'State management is about how your app responds to data changes. Whether using the simple Provider or the robust BLoC pattern, the goal is to separate the Business Logic from the UI layer.',
        codeSnippet: '// Using Provider Pattern\nclass CounterProvider with ChangeNotifier {\n  int _count = 0;\n  int get count => _count;\n\n  void increment() {\n    _count++;\n    notifyListeners(); // Tells the UI to rebuild\n  }\n}\n\n// UI Usage\nfinal counter = context.watch<CounterProvider>();\nText("${counter.count}");'
      },
      { 
        title: 'Navigation', 
        description: 'Navigator 2.0, go_router, and deep linking.',
        explanation: 'Navigation allows users to move between screens. Modern Flutter apps use declarative routing (like go_router) to handle complex flows and deep links from web or other apps seamlessly.',
        codeSnippet: 'final router = GoRouter(\n  routes: [\n    GoRoute(\n      path: "/",\n      builder: (context, state) => HomeScreen(),\n      routes: [\n        GoRoute(\n          path: "details/:id",\n          builder: (context, state) => DetailScreen(id: state.pathParameters["id"]!),\n        ),\n      ],\n    ),\n  ],\n);'
      },
      { 
        title: 'Working with Async', 
        description: 'Futures, Streams, and the Event Loop.',
        explanation: 'Dart is single-threaded but handles concurrency via an Event Loop. Use "Future" for single async results (API calls) and "Stream" for continuous data flows (Websockets, Firebase).',
        codeSnippet: 'Future<String> fetchUser() async {\n  await Future.delayed(const Duration(seconds: 2));\n  return "Flutter Pro";\n}\n\nStream<int> timerStream() async* {\n  for (int i = 0; i < 10; i++) {\n    await Future.delayed(const Duration(seconds: 1));\n    yield i;\n  }\n}'
      },
      { 
        title: 'State Restoration', 
        description: 'Preserving app state across OS kills.',
        explanation: 'State Restoration allows your app to "remember" what the user was doing if the OS kills the process to save memory. Critical for forms and complex navigations on mobile.',
        codeSnippet: 'class MyRestorableWidget extends StatefulWidget {\n  @override\n  _MyRestorableState createState() => _MyRestorableState();\n}\n\nclass _MyRestorableState extends State<MyRestorableWidget> with RestorationMixin {\n  final RestorableInt _counter = RestorableInt(0);\n\n  @override\n  String get restorationId => "counter_screen";\n\n  @override\n  void restoreState(RestorationBucket? oldBucket, bool initialRestore) {\n    registerForRestoration(_counter, "count_value");\n  }\n}'
      },
      { 
        title: 'Handling Forms', 
        description: 'Validation, text controllers, and input types.',
        explanation: 'Forms in Flutter are managed via the Form widget and GlobalKeys. Use TextEditingControllers to retrieve values and FormState to trigger validation logic across multiple fields.',
        codeSnippet: 'final _formKey = GlobalKey<FormState>();\nfinal _controller = TextEditingController();\n\nForm(\n  key: _formKey,\n  child: TextFormField(\n    controller: _controller,\n    validator: (val) => val!.isEmpty ? "Enter text" : null,\n    decoration: const InputDecoration(labelText: "Email"),\n  ),\n);'
      }
    ]
  },
  {
    id: 'data-networking',
    title: 'Data & Networking',
    subtitle: 'Connecting to servers and local storage.',
    items: [
      { 
        title: 'Networking', 
        description: 'Making HTTP requests with http and dio.',
        explanation: 'Networking is the backbone of most apps. While the "http" package is lightweight, "dio" provides advanced features like interceptors, global config, and response cancellation.',
        codeSnippet: 'import "package:dio/dio.dart";\n\nfinal dio = Dio();\n\nFuture<void> login(String user, String pass) async {\n  try {\n    final response = await dio.post("/login", data: {"u": user, "p": pass});\n    print("Status: ${response.statusCode}");\n  } on DioException catch (e) {\n    print("Error: ${e.message}");\n  }\n}'
      },
      { 
        title: 'Working with APIs', 
        description: 'Understanding endpoint consumption and headers.',
        explanation: 'Consuming APIs requires proper header management (Auth tokens), query parameters, and handling various content types like multipart for file uploads.',
        codeSnippet: 'Future<List<Post>> getPosts() async {\n  final response = await http.get(\n    Uri.parse("https://api.example.com/posts"),\n    headers: {"Authorization": "Bearer $token"},\n  );\n  // Parse and return...\n}'
      },
      { 
        title: 'RESTful API Integration', 
        description: 'CRUD operations and status code handling.',
        explanation: 'Integration involves mapping HTTP methods (GET, POST, PUT, DELETE) to your application features. Always check status codes (2xx for success, 4xx/5xx for errors) to provide user feedback.',
        codeSnippet: 'Future<void> updateProfile(User user) async {\n  final res = await http.put(\n    Uri.parse("/profile/${user.id}"),\n    body: jsonEncode(user.toJson()),\n  );\n  if (res.statusCode != 200) throw Exception("Failed");\n}'
      },
      { 
        title: 'JSON Serialization', 
        description: 'Mapping dynamic maps to type-safe models.',
        explanation: 'JSON data from APIs comes as a Map<String, dynamic>. Using packages like "json_serializable" or "freezed" ensures type safety and reduces boiler plate code.',
        codeSnippet: 'class User {\n  final String email;\n  User({required this.email});\n\n  // Factory method for creating instance from JSON map\n  factory User.fromJson(Map<String, dynamic> json) => \n    User(email: json["email"] as String);\n\n  // Method for converting instance back to JSON map\n  Map<String, dynamic> toJson() => {"email": email};\n}'
      },
      { 
        title: 'Database Integration', 
        description: 'SQLite (sqflite), Hive, and Drift.',
        explanation: 'Local storage is key for offline-first apps. SQLite is best for relational data, Hive is a blazingly fast NoSQL solution, and Drift offers a type-safe SQL wrapper.',
        codeSnippet: 'final database = openDatabase(\n  join(await getDatabasesPath(), "app.db"),\n  onCreate: (db, version) => \n    db.execute("CREATE TABLE users(id INTEGER PRIMARY KEY, name TEXT)"),\n  version: 1,\n);'
      }
    ]
  },
  {
    id: 'advanced-ui',
    title: 'Advanced UI & UX',
    subtitle: 'Polish, motion, and inclusive design.',
    items: [
      { 
        title: 'Graphics & Animation', 
        description: 'Custom Painters and Canvas drawing.',
        explanation: 'For UIs that widgets can\'t build, use the Canvas API. CustomPainter lets you draw lines, circles, and paths directly, which is perfect for charts or custom loaders.',
        codeSnippet: 'class CirclePainter extends CustomPainter {\n  @override\n  void paint(Canvas canvas, Size size) {\n    final paint = Paint()..color = Colors.blue;\n    canvas.drawCircle(Offset(size.width/2, size.height/2), 40, paint);\n  }\n  @override\n  bool shouldRepaint(CustomPainter old) => false;\n}'
      },
      { 
        title: 'Animations & Transitions', 
        description: 'Lottie, Rive, and Implicit Animations.',
        explanation: 'Motion adds polish. Use Implicit animations (AnimatedContainer) for ease, or Explicit animations (AnimationController) for fine-grained control over duration and curves.',
        codeSnippet: 'AnimationController _controller;\n\n// Tween maps 0.0-1.0 to actual values\n_animation = ColorTween(begin: Colors.red, end: Colors.blue)\n    .animate(_controller);\n\nAnimatedBuilder(\n  animation: _animation,\n  builder: (context, child) => Container(color: _animation.value),\n);'
      },
      { 
        title: 'Accessibility', 
        description: 'Semantic labels and screen reader support.',
        explanation: 'Apps should be usable by everyone. Flutter provides the Semantics widget to annotate your UI so screen readers can describe exactly what is on screen.',
        codeSnippet: 'Semantics(\n  label: "Submit Order",\n  button: true,\n  child: GestureDetector(\n    onTap: _submit,\n    child: Container(child: const Text("GO")),\n  ),\n)'
      },
      { 
        title: 'Internationalization (i18n)', 
        description: 'Adapting to different languages and regions.',
        explanation: 'Use the flutter_localizations package. It allows you to swap text, date formats, and currencies based on the user\'s system locale.',
        codeSnippet: 'MaterialApp(\n  localizationsDelegates: [GlobalMaterialLocalizations.delegate],\n  supportedLocales: [Locale("en"), Locale("es")],\n  home: Text(AppLocalizations.of(context)!.welcome),\n);'
      },
      { 
        title: 'Localization (l10n)', 
        description: 'Handling ARB files and generation.',
        explanation: 'The standard way to manage translations is via .arb files (JSON-like files). Flutter generates Dart classes from these files at build time for type-safe access.',
        codeSnippet: '// app_en.arb\n{\n  "hello": "Hello World",\n  "@hello": { "description": "A greeting" }\n}'
      }
    ]
  },
  {
    id: 'ecosystem',
    title: 'Ecosystem & Architecture',
    subtitle: 'Structuring for scale and security.',
    items: [
      { 
        title: 'Firebase Integration', 
        description: 'Auth, Firestore, Messaging, and Crashlytics.',
        explanation: 'Firebase is the premier backend-as-a-service for Flutter. It offers real-time databases and authentication with plug-and-play ease through official plugins.',
        codeSnippet: 'await FirebaseAuth.instance.signInWithEmailAndPassword(\n  email: "dev@flutter.com", password: "secret_password");\n\nawait FirebaseFirestore.instance.collection("users").add({"name": "Bob"});'
      },
      { 
        title: 'Package Management', 
        description: 'Pub.dev, pubspec.yaml, and versioning.',
        explanation: 'Flutter leverages thousands of community-built packages on pub.dev. Managing your pubspec.yaml file carefully avoids "dependency hell" and ensures build reproducibility.',
        codeSnippet: 'dependencies:\n  flutter:\n    sdk: flutter\n  provider: ^6.0.0 # SemVer: allow minor updates\n  http: 1.2.0    # Fixed: always use this version'
      },
      { 
        title: 'Dependency Management', 
        description: 'Inversion of Control and get_it.',
        explanation: 'Dependency injection (DI) decouples classes from their dependencies. "get_it" is a simple service locator for Flutter that helps manage singletons and factories globally.',
        codeSnippet: 'final getIt = GetIt.instance;\n\nvoid setup() {\n  getIt.registerLazySingleton<ApiService>(() => ApiService());\n}\n\n// Anywhere in app\nfinal api = getIt<ApiService>();'
      },
      { 
        title: 'Flutter Architecture', 
        description: 'Clean Architecture, Layered design, and DRY.',
        explanation: 'Structure your code into Presentation, Domain, and Data layers. This makes your app easier to maintain, test, and adapt to changes over time.',
        codeSnippet: '// Data Layer: Models and Repositories\n// Domain Layer: Entities and Use Cases\n// Presentation Layer: Widgets and Controllers/Blocs'
      },
      { 
        title: 'Security Best Practices', 
        description: 'SSL Pinning, Obfuscation, and Secure Storage.',
        explanation: 'Protect user data. Use "flutter_secure_storage" for sensitive tokens and always obfuscate your code before publishing to prevent easy reverse engineering.',
        codeSnippet: '// Obfuscating build\n// flutter build apk --obfuscate --split-debug-info=/<directory>\n\nfinal secure = FlutterSecureStorage();\nawait secure.write(key: "auth_token", value: token);'
      }
    ]
  },
  {
    id: 'quality',
    title: 'Quality & Shipping',
    subtitle: 'Testing, performance, and deployment.',
    items: [
      { 
        title: 'Testing Flutter Apps', 
        description: 'Unit, Widget, and Integration tests.',
        explanation: 'Robust apps require tests. Unit tests check logic, Widget tests check UI components, and Integration tests check the entire flow on a real device or emulator.',
        codeSnippet: 'testWidgets("Button click test", (tester) async {\n  await tester.pumpWidget(const MyButton());\n  await tester.tap(find.byType(ElevatedButton));\n  await tester.pump(); // Trigger rebuild\n  expect(find.text("Clicked"), findsOneWidget);\n});'
      },
      { 
        title: 'Debugging & Error Handling', 
        description: 'DevTools, Logging, and Error Boundaries.',
        explanation: 'Use the Flutter DevTools to inspect the widget tree, track memory leaks, and profile your app. Use ErrorWidgets to show graceful UI if a component crashes.',
        codeSnippet: 'FlutterError.onError = (details) {\n  FlutterError.presentError(details);\n  // Send to Crashlytics\n  myReportingService.send(details);\n};\n\nrunApp(const MyApp());'
      },
      { 
        title: 'Performance Optimization', 
        description: 'Jank reduction and tree shaking.',
        explanation: 'Optimizing performance involves minimizing widget rebuilds (using const), optimizing images, and avoiding expensive operations in the build() method.',
        codeSnippet: '// BAD: Expensive work in build\n@override\nWidget build(ctx) {\n  final data = calculatePiToBillionPlaces(); // Don\'t do this!\n  return Text("$data");\n}\n\n// GOOD: Cache results or use FutureBuilder'
      },
      { 
        title: 'Deployment', 
        description: 'Building App Bundles and IPA files.',
        explanation: 'Deployment is the final step. Learn how to sign apps for Android and iOS, configure build flavors (Dev/Prod), and generate the final binaries for store submission.',
        codeSnippet: '# Android\nflutter build appbundle --flavor production\n\n# iOS\nflutter build ipa --export-method app-store'
      },
      { 
        title: 'Publishing', 
        description: 'Store metadata, screenshots, and release tracks.',
        explanation: 'Publishing isn\'t just code. It involves preparing store assets (icons, screenshots), managing privacy policies, and handling staged rollouts (1%, 5%, 100%) for safety.',
        codeSnippet: '// Pro tip: Use Fastlane to automate your release \n// screenshots and metadata updates for both stores.'
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
