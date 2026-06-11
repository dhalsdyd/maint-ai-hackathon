import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import '../models/mock_data.dart';

class WriteupResultScreen extends StatelessWidget {
  final Aircraft aircraft;
  final String symptom;
  final MaintenanceGuide guide;
  final bool hapticMode;

  const WriteupResultScreen({
    super.key,
    required this.aircraft,
    required this.symptom,
    required this.guide,
    required this.hapticMode,
  });

  @override
  Widget build(BuildContext context) {
    if (hapticMode) {
      HapticFeedback.heavyImpact();
    }

    return Scaffold(
      appBar: AppBar(
        title: const Text('AI 정비 가이드'),
        backgroundColor: const Color(0xFF2563EB),
        foregroundColor: Colors.white,
      ),
      body: ListView(
        padding: const EdgeInsets.all(20),
        children: [
          _buildHeader(),
          const SizedBox(height: 16),
          _buildInfoCard('입력 증상', symptom, Icons.report_outlined),
          const SizedBox(height: 12),
          _buildInfoCard('결함 코드', guide.defectCode, Icons.qr_code),
          const SizedBox(height: 12),
          _buildInfoCard('TO 참조', guide.toReference, Icons.menu_book),
          const SizedBox(height: 12),
          _buildSummaryCard(),
          const SizedBox(height: 16),
          _buildChecklist(),
          const SizedBox(height: 16),
          _buildMetricsRow(),
        ],
      ),
    );
  }

  Widget _buildHeader() {
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        gradient: const LinearGradient(
          colors: [Color(0xFF2563EB), Color(0xFF1D4ED8)],
        ),
        borderRadius: BorderRadius.circular(12),
      ),
      child: Row(
        children: [
          const Icon(Icons.check_circle, color: Colors.white, size: 32),
          const SizedBox(width: 12),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  '${aircraft.name} (${aircraft.id})',
                  style: const TextStyle(color: Colors.white, fontWeight: FontWeight.bold),
                ),
                const Text(
                  'RAG 분석 완료 · 1.2초',
                  style: TextStyle(color: Colors.white70, fontSize: 12),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildInfoCard(String label, String value, IconData icon) {
    return Card(
      child: Padding(
        padding: const EdgeInsets.all(14),
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Icon(icon, size: 20, color: const Color(0xFF2563EB)),
            const SizedBox(width: 12),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(label, style: TextStyle(fontSize: 12, color: Colors.grey[600])),
                  const SizedBox(height: 4),
                  Text(value, style: const TextStyle(fontWeight: FontWeight.w500)),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildSummaryCard() {
    return Card(
      color: const Color(0xFFF0F9FF),
      child: Padding(
        padding: const EdgeInsets.all(14),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Row(
              children: [
                Icon(Icons.psychology, color: Color(0xFF2563EB)),
                SizedBox(width: 8),
                Text('AI 분석 요약', style: TextStyle(fontWeight: FontWeight.bold)),
              ],
            ),
            const SizedBox(height: 8),
            Text(guide.summary, style: const TextStyle(height: 1.5)),
          ],
        ),
      ),
    );
  }

  Widget _buildChecklist() {
    return Card(
      child: Padding(
        padding: const EdgeInsets.all(14),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text('정비 체크리스트', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16)),
            const SizedBox(height: 12),
            ...guide.checklist.asMap().entries.map((e) => Padding(
                  padding: const EdgeInsets.only(bottom: 8),
                  child: Row(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Container(
                        width: 24,
                        height: 24,
                        decoration: BoxDecoration(
                          color: const Color(0xFF2563EB).withValues(alpha: 0.1),
                          borderRadius: BorderRadius.circular(6),
                        ),
                        child: Center(
                          child: Text('${e.key + 1}', style: const TextStyle(fontSize: 12, fontWeight: FontWeight.bold)),
                        ),
                      ),
                      const SizedBox(width: 10),
                      Expanded(child: Text(e.value)),
                    ],
                  ),
                )),
          ],
        ),
      ),
    );
  }

  Widget _buildMetricsRow() {
    return Row(
      children: [
        Expanded(
          child: _MetricChip(label: '예상 TAT', value: guide.estimatedTime, color: const Color(0xFF059669)),
        ),
        const SizedBox(width: 12),
        Expanded(
          child: _MetricChip(label: '비행 상태', value: guide.priority, color: const Color(0xFFD97706)),
        ),
      ],
    );
  }
}

class _MetricChip extends StatelessWidget {
  final String label;
  final String value;
  final Color color;

  const _MetricChip({required this.label, required this.value, required this.color});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(
        color: color.withValues(alpha: 0.1),
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: color.withValues(alpha: 0.3)),
      ),
      child: Column(
        children: [
          Text(label, style: TextStyle(fontSize: 12, color: color)),
          const SizedBox(height: 4),
          Text(value, style: TextStyle(fontWeight: FontWeight.bold, color: color)),
        ],
      ),
    );
  }
}
