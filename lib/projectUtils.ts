/**
 * Extract key metrics from markdown impact content
 * Looks for lines under "## Key Metrics" heading
 */
export function extractKeyMetrics(impact: string, limit: number = 3): string[] {
  const lines = impact.split('\n')
  const metrics: string[] = []
  let inMetricsSection = false

  for (const line of lines) {
    // Check if we've reached the Key Metrics section
    if (line.includes('## Key Metrics')) {
      inMetricsSection = true
      continue
    }

    // Exit metrics section if we hit another heading
    if (inMetricsSection && line.startsWith('##')) {
      break
    }

    // Extract metric lines (starting with -)
    if (inMetricsSection && line.trim().startsWith('-')) {
      const metric = line.replace(/^-\s*/, '').trim()
      if (metric) {
        metrics.push(metric)
        if (metrics.length >= limit) {
          break
        }
      }
    }
  }

  return metrics
}

/**
 * Truncate a metric string to a maximum length
 */
export function truncateMetric(metric: string, maxLength: number = 60): string {
  if (metric.length <= maxLength) {
    return metric
  }
  return metric.substring(0, maxLength) + '...'
}
