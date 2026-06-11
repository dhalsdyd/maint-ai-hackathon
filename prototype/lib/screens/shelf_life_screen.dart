import 'package:flutter/material.dart';
import '../models/mock_data.dart';

class ShelfLifeScreen extends StatelessWidget {
  const ShelfLifeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final urgent = shelfLifeItems.where((i) => i.daysRemaining <= 7).toList();
    final upcoming = shelfLifeItems.where((i) => i.daysRemaining > 7).toList();

    return Scaffold(
      appBar: AppBar(
        title: const Text('시한품목 알람'),
        backgroundColor: const Color(0xFFD97706),
        foregroundColor: Colors.white,
      ),
      body: ListView(
        padding: const EdgeInsets.all(20),
        children: [
          _buildSummaryCard(urgent.length, upcoming.length),
          const SizedBox(height: 20),
          if (urgent.isNotEmpty) ...[
            const Text('긴급 교체 (7일 이내)', style: TextStyle(fontWeight: FontWeight.bold, color: Color(0xFFDC2626))),
            const SizedBox(height: 8),
            ...urgent.map((item) => _ShelfLifeCard(item: item, urgent: true)),
          ],
          const SizedBox(height: 16),
          const Text('예정 교체', style: TextStyle(fontWeight: FontWeight.bold)),
          const SizedBox(height: 8),
          ...upcoming.map((item) => _ShelfLifeCard(item: item, urgent: false)),
        ],
      ),
    );
  }

  Widget _buildSummaryCard(int urgentCount, int upcomingCount) {
    return Card(
      color: const Color(0xFFFFF7ED),
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: [
            _SummaryItem(label: '긴급', count: urgentCount, color: const Color(0xFFDC2626)),
            _SummaryItem(label: '예정', count: upcomingCount, color: const Color(0xFFD97706)),
            _SummaryItem(label: '전체', count: shelfLifeItems.length, color: const Color(0xFF1B3A5C)),
          ],
        ),
      ),
    );
  }
}

class _SummaryItem extends StatelessWidget {
  final String label;
  final int count;
  final Color color;

  const _SummaryItem({required this.label, required this.count, required this.color});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text('$count', style: TextStyle(fontSize: 28, fontWeight: FontWeight.bold, color: color)),
        Text(label, style: TextStyle(fontSize: 12, color: color)),
      ],
    );
  }
}

class _ShelfLifeCard extends StatelessWidget {
  final ShelfLifeItem item;
  final bool urgent;

  const _ShelfLifeCard({required this.item, required this.urgent});

  @override
  Widget build(BuildContext context) {
    return Card(
      margin: const EdgeInsets.only(bottom: 8),
      child: ListTile(
        leading: CircleAvatar(
          backgroundColor: urgent ? const Color(0xFFDC2626) : const Color(0xFFD97706),
          child: Text(
            'D-${item.daysRemaining}',
            style: const TextStyle(color: Colors.white, fontSize: 11, fontWeight: FontWeight.bold),
          ),
        ),
        title: Text(item.partName, style: const TextStyle(fontWeight: FontWeight.w500)),
        subtitle: Text('${item.aircraftId} · ${item.category}'),
        trailing: urgent
            ? const Icon(Icons.warning_amber, color: Color(0xFFDC2626))
            : const Icon(Icons.schedule, color: Color(0xFFD97706)),
      ),
    );
  }
}
