// Airspace Database - Sample RC Flying Field Airspace Data
// Real implementation would load from external source or database

const AIRSPACE_DB = [
  // Class B Airspace (Busiest - Major Airports)
  { id: 'atl', name: 'Atlanta (ATL)', lat: 33.6407, lng: -84.4277, radiusNm: 30, cls: 'B' },
  { id: 'dal', name: 'Dallas/Fort Worth (DFW)', lat: 32.8975, lng: -97.038, radiusNm: 30, cls: 'B' },
  { id: 'den', name: 'Denver (DEN)', lat: 39.8561, lng: -104.6737, radiusNm: 30, cls: 'B' },
  { id: 'lax', name: 'Los Angeles (LAX)', lat: 33.9425, lng: -118.4081, radiusNm: 30, cls: 'B' },
  { id: 'ord', name: 'Chicago (ORD)', lat: 41.9742, lng: -87.9073, radiusNm: 30, cls: 'B' },

  // Class C Airspace (Medium - Regional Airports)
  { id: 'phx', name: 'Phoenix (PHX)', lat: 33.4342, lng: -112.0116, radiusNm: 20, cls: 'C' },
  { id: 'sea', name: 'Seattle (SEA)', lat: 47.4502, lng: -122.3088, radiusNm: 20, cls: 'C' },
  { id: 'bos', name: 'Boston (BOS)', lat: 42.3656, lng: -71.0096, radiusNm: 20, cls: 'C' },
  { id: 'mia', name: 'Miami (MIA)', lat: 25.7959, lng: -80.2870, radiusNm: 20, cls: 'C' },

  // Class D Airspace (Towered - Medium Airports)
  { id: 'jax', name: 'Jacksonville (JAX)', lat: 30.4941, lng: -81.6879, radiusNm: 8, cls: 'D' },
  { id: 'sfo', name: 'San Francisco (SFO)', lat: 37.6213, lng: -122.379, radiusNm: 8, cls: 'D' },
  { id: 'mdw', name: 'Chicago Midway (MDW)', lat: 41.7861, lng: -87.7521, radiusNm: 8, cls: 'D' },
];
