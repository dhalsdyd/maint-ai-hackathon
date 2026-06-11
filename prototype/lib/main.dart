import 'package:flutter/material.dart';
import 'screens/home_screen.dart';

void main() {
  runApp(const MaintAiLiteApp());
}

class MaintAiLiteApp extends StatelessWidget {
  const MaintAiLiteApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'MAINT-AI Lite',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(
          seedColor: const Color(0xFF1B3A5C),
          brightness: Brightness.light,
        ),
        useMaterial3: true,
        fontFamily: 'Pretendard',
      ),
      home: const HomeScreen(),
    );
  }
}
