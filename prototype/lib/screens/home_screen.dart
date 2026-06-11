import 'package:flutter/material.dart';
import '../models/mock_data.dart';
import 'writeup_screen.dart';
import 'ocr_screen.dart';
import 'shelf_life_screen.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  Aircraft selectedAircraft = aircraftList.first;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFF5F7FA),
      appBar: AppBar(
        title: const Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text('MAINT-AI Lite', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
            Text('지능형 정비 행정·분석 플랫폼', style: TextStyle(fontSize: 11)),
          ],
        ),
        toolbarHeight: 64,
        backgroundColor: const Color(0xFF1B3A5C),
        foregroundColor: Colors.white,
      ),
      body: Padding(
        padding: const EdgeInsets.all(20),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            _buildAircraftSelector(),
            const SizedBox(height: 24),
            const Text('정비 업무', style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold)),
            const SizedBox(height: 12),
            Expanded(
              child: GridView.count(
                crossAxisCount: 2,
                crossAxisSpacing: 16,
                mainAxisSpacing: 16,
                childAspectRatio: 1.3,
                children: [
                  _FeatureCard(
                    icon: Icons.chat_bubble_outline,
                    title: 'Write-up\n정비 Copilot',
                    subtitle: 'Pillar 2 · 데모 메인',
                    color: const Color(0xFF2563EB),
                    onTap: () => Navigator.push(
                      context,
                      MaterialPageRoute(
                        builder: (_) => WriteupScreen(aircraft: selectedAircraft),
                      ),
                    ),
                  ),
                  _FeatureCard(
                    icon: Icons.document_scanner_outlined,
                    title: 'OCR\n서식 맵퍼',
                    subtitle: 'Pillar 1',
                    color: const Color(0xFF059669),
                    onTap: () => Navigator.push(
                      context,
                      MaterialPageRoute(builder: (_) => const OcrScreen()),
                    ),
                  ),
                  _FeatureCard(
                    icon: Icons.alarm_on_outlined,
                    title: '시한품목\n알람',
                    subtitle: 'Pillar 3',
                    color: const Color(0xFFD97706),
                    onTap: () => Navigator.push(
                      context,
                      MaterialPageRoute(builder: (_) => const ShelfLifeScreen()),
                    ),
                  ),
                  _FeatureCard(
                    icon: Icons.menu_book_outlined,
                    title: '정비 Wiki',
                    subtitle: '부가 기능',
                    color: const Color(0xFF7C3AED),
                    onTap: () => _showWikiSnackBar(context),
                  ),
                ],
              ),
            ),
            _buildStatusBar(),
          ],
        ),
      ),
    );
  }

  Widget _buildAircraftSelector() {
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(12),
        boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.05), blurRadius: 8)],
      ),
      child: Row(
        children: [
          const Icon(Icons.flight, color: Color(0xFF1B3A5C)),
          const SizedBox(width: 12),
          Expanded(
            child: DropdownButton<Aircraft>(
              value: selectedAircraft,
              isExpanded: true,
              underline: const SizedBox(),
              items: aircraftList
                  .map((a) => DropdownMenuItem(
                        value: a,
                        child: Text('${a.name} (${a.id}) — ${a.squadron}'),
                      ))
                  .toList(),
              onChanged: (a) {
                if (a != null) setState(() => selectedAircraft = a);
              },
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildStatusBar() {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
      decoration: BoxDecoration(
        color: const Color(0xFF1B3A5C).withValues(alpha: 0.08),
        borderRadius: BorderRadius.circular(8),
      ),
      child: const Row(
        children: [
          Icon(Icons.shield_outlined, size: 16, color: Color(0xFF1B3A5C)),
          SizedBox(width: 8),
          Text('폐쇄망 모드 · 로컬 sLLM 연결됨', style: TextStyle(fontSize: 12, color: Color(0xFF1B3A5C))),
        ],
      ),
    );
  }

  void _showWikiSnackBar(BuildContext context) {
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('정비 Wiki — NFC/QR 스캔 기능 (로드맵 2단계)')),
    );
  }
}

class _FeatureCard extends StatelessWidget {
  final IconData icon;
  final String title;
  final String subtitle;
  final Color color;
  final VoidCallback onTap;

  const _FeatureCard({
    required this.icon,
    required this.title,
    required this.subtitle,
    required this.color,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return Material(
      color: Colors.white,
      borderRadius: BorderRadius.circular(16),
      elevation: 2,
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(16),
        child: Padding(
          padding: const EdgeInsets.all(16),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Container(
                padding: const EdgeInsets.all(10),
                decoration: BoxDecoration(
                  color: color.withValues(alpha: 0.1),
                  borderRadius: BorderRadius.circular(10),
                ),
                child: Icon(icon, color: color, size: 28),
              ),
              const Spacer(),
              Text(title, style: const TextStyle(fontSize: 15, fontWeight: FontWeight.bold)),
              const SizedBox(height: 4),
              Text(subtitle, style: TextStyle(fontSize: 11, color: Colors.grey[600])),
            ],
          ),
        ),
      ),
    );
  }
}
