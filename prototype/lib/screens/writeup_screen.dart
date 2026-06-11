import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import '../models/mock_data.dart';
import 'writeup_result_screen.dart';

class WriteupScreen extends StatefulWidget {
  final Aircraft aircraft;

  const WriteupScreen({super.key, required this.aircraft});

  @override
  State<WriteupScreen> createState() => _WriteupScreenState();
}

class _WriteupScreenState extends State<WriteupScreen> {
  final _controller = TextEditingController();
  bool _hapticMode = false;
  bool _isAnalyzing = false;

  static const _demoSymptom = 'HUD 타겟팅 기호 간헐적 흔들림';

  @override
  void initState() {
    super.initState();
    _controller.text = _demoSymptom;
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  Future<void> _analyze() async {
    if (_controller.text.trim().isEmpty) return;

    setState(() => _isAnalyzing = true);

    if (_hapticMode) {
      HapticFeedback.mediumImpact();
    }

    await Future.delayed(const Duration(milliseconds: 1200));

    if (!mounted) return;
    setState(() => _isAnalyzing = false);

    Navigator.push(
      context,
      MaterialPageRoute(
        builder: (_) => WriteupResultScreen(
          aircraft: widget.aircraft,
          symptom: _controller.text.trim(),
          guide: hudWriteupGuide,
          hapticMode: _hapticMode,
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Write-up 정비 Copilot'),
        backgroundColor: const Color(0xFF2563EB),
        foregroundColor: Colors.white,
      ),
      body: Padding(
        padding: const EdgeInsets.all(20),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            _buildAircraftChip(),
            const SizedBox(height: 20),
            const Text('조종사 결함 보고 (Write-up)', style: TextStyle(fontWeight: FontWeight.bold)),
            const SizedBox(height: 8),
            TextField(
              controller: _controller,
              maxLines: 4,
              decoration: InputDecoration(
                hintText: '증상을 입력하세요...',
                border: OutlineInputBorder(borderRadius: BorderRadius.circular(12)),
                filled: true,
                fillColor: Colors.white,
              ),
            ),
            const SizedBox(height: 16),
            SwitchListTile(
              title: const Text('햅틱 모드 (현장 작업)'),
              subtitle: const Text('Eyes-free 진동 알림'),
              value: _hapticMode,
              onChanged: (v) => setState(() => _hapticMode = v),
              contentPadding: EdgeInsets.zero,
            ),
            const Spacer(),
            SizedBox(
              width: double.infinity,
              height: 52,
              child: FilledButton.icon(
                onPressed: _isAnalyzing ? null : _analyze,
                icon: _isAnalyzing
                    ? const SizedBox(
                        width: 20,
                        height: 20,
                        child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white),
                      )
                    : const Icon(Icons.auto_awesome),
                label: Text(_isAnalyzing ? 'RAG 분석 중...' : 'AI 정비 가이드 생성'),
                style: FilledButton.styleFrom(
                  backgroundColor: const Color(0xFF2563EB),
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildAircraftChip() {
    return Chip(
      avatar: const Icon(Icons.flight, size: 18),
      label: Text('${widget.aircraft.name} (${widget.aircraft.id})'),
      backgroundColor: const Color(0xFF2563EB).withValues(alpha: 0.1),
    );
  }
}
