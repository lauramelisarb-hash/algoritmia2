// Calculate the monetary value of a single sale
function getSaleValue(sale) {
  if (
    !sale ||
    typeof sale.quantity !== "number" ||
    typeof sale.price !== "number" ||
    isNaN(sale.quantity) ||
    isNaN(sale.price)
  ) {
    return 0;
  }
  return sale.quantity * sale.price;
}

// Calculate total revenue across all sales
function getTotalSales(sales) {
  if (!Array.isArray(sales) || sales.length === 0) {
    return 0;
  }

  let total = 0;
  for (const eachSale of sales) {
    total += getSaleValue(eachSale);
  }
  return total;
}

// Calculate total units sold
function getTotalUnits(sales) {
  if (!Array.isArray(sales) || sales.length === 0) {
    return 0;
  }

  let totalUnits = 0;
  for (const eachSale of sales) {
    if (typeof eachSale?.quantity === "number" && !isNaN(eachSale.quantity)) {
      totalUnits += eachSale.quantity;
    }
  }
  return totalUnits;
}

// Find the single highest sale record
function getHighestSale(sales) {
  if (!Array.isArray(sales) || sales.length === 0) {
    return null;
  }

  let highestRecord = sales[0];
  let highestAmount = getSaleValue(highestRecord);

  for (let i = 1; i < sales.length; i++) {
    const currentSale = sales[i];
    const currentAmount = getSaleValue(currentSale);

    if (currentAmount > highestAmount) {
      highestAmount = currentAmount;
      highestRecord = currentSale;
    }
  }

  return highestRecord;
}

// Calculate the average ticket value (ticket promedio) for valid transactions
function getAverageTicket(sales) {
  if (!Array.isArray(sales) || sales.length === 0) {
    return 0;
  }

  let validAmount = 0;
  let validCount = 0;

  for (const eachSale of sales) {
    if (typeof eachSale?.quantity === "number" && eachSale.quantity > 0) {
      validAmount += getSaleValue(eachSale);
      validCount += 1;
    }
  }

  if (validCount === 0) {
    return 0;
  }

  return validAmount / validCount;
}

// Calculate total revenue by specific city (case-insensitive & trims outer spaces)
function getSalesByCity(sales, targetCity) {
  if (!Array.isArray(sales) || typeof targetCity !== "string") {
    return 0;
  }

  const standardizedCity = targetCity.trim().toLowerCase();
  let cityTotal = 0;

  for (const eachSale of sales) {
    const saleCity = (eachSale?.city || "").trim().toLowerCase();
    if (saleCity === standardizedCity) {
      cityTotal += getSaleValue(eachSale);
    }
  }

  return cityTotal;
}

// Total Sales with Methods (replaces getTotalSales)
function totalSalesM(sales) {
  if (!Array.isArray(sales) || sales.length === 0) return 0;
  return sales.reduce((total, sale) => total + getSaleValue(sale), 0);
}

// Total Units with Methods (replaces getTotalUnits)
function totalUnitsM(sales) {
  if (!Array.isArray(sales) || sales.length === 0) return 0;
  return sales.reduce(
    (total, sale) =>
      total +
      (typeof sale?.quantity === "number" && !isNaN(sale.quantity)
        ? sale.quantity
        : 0),
    0
  );
}

// Sales by City with Methods (replaces getSalesByCity)
function salesByCityM(sales, targetCity) {
  if (!Array.isArray(sales) || typeof targetCity !== "string") return 0;

  const normalizedTarget = targetCity.trim().toLowerCase();

  return sales
    .filter((sale) => (sale?.city || "").trim().toLowerCase() === normalizedTarget)
    .reduce((total, sale) => total + getSaleValue(sale), 0);
}

const cityMap = {
  medellin: "Medellín",
  medellín: "Medellín",
  bogota: "Bogotá",
  bogotá: "Bogotá",
  cali: "Cali",
  pereira: "Pereira"
};

function totalRevenuePerCity(sales) {
  const accumulator = {};
  if (!Array.isArray(sales) || sales.length === 0) {
    return {};
  }
  for (const sale of sales) {
    const normalized = (sale?.city || "").trim().toLowerCase();
    const cleanCity =
      cityMap[normalized] ||
      (normalized
        ? normalized.charAt(0).toUpperCase() + normalized.slice(1)
        : "UNKNOWN");
    const calculateLineTotal = getSaleValue(sale);
    accumulator[cleanCity] = (accumulator[cleanCity] || 0) + calculateLineTotal;
  }
  return accumulator;
}

function UnitsSoldPerProduct(sales) {
  if (!Array.isArray(sales) || sales.length === 0) {
    return {};
  }
  const productUnits = {};

  for (const sale of sales) {
    const key = (sale?.product || "UNKNOWN").trim();
    const qty =
      typeof sale?.quantity === "number" && !isNaN(sale.quantity)
        ? sale.quantity
        : 0;
    productUnits[key] = (productUnits[key] || 0) + qty;
  }
  return productUnits;
}

function topProductsByRevenue(sales, k) {
  // Step 1: Guard Clauses & Edge Case Handling
  if (!Array.isArray(sales)) return [];
  if (typeof k !== "number" || k < 1) return [];

  // Step 2: Group and Accumulate Revenue by Product
  const productRevenues = sales.reduce((acc, currentValue) => {
    const product = (currentValue?.product || "UNKNOWN").trim();
    const revenue = getSaleValue(currentValue);

    // Look up existing total (or 0), add new revenue, and save it back
    acc[product] = (acc[product] || 0) + revenue;

    // Always return the accumulator for the next loop
    return acc;
  }, {});

  // Step 3: Convert to array, sort descending, slice top k, and format
  return Object.entries(productRevenues)
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(([product, revenue]) => ({ product, revenue }));
}

// Filter sales records by an exact date string (YYYY-MM-DD)
function salesByDate(sales, targetDate) {
  if (!Array.isArray(sales) || typeof targetDate !== "string") {
    return [];
  }

  const normalizedDate = targetDate.trim();
  return sales.filter((sale) => (sale?.date || "").trim() === normalizedDate);
}

// First sale record lookup (constant time baseline)
function firstSale(sales, counter) {
  if (counter && typeof counter.operations === "number") {
    counter.operations += 1;
  }
  if (!Array.isArray(sales) || sales.length === 0) {
    return null;
  }
  return sales[0];
}

function firstSaleInstrumented(sales, counter) {
  return firstSale(sales, counter);
}

function getTotalSalesInstrumented(sales, counter) {
  if (!Array.isArray(sales) || sales.length === 0) {
    return 0;
  }

  let total = 0;
  for (const eachSale of sales) {
    if (counter && typeof counter.operations === "number") {
      counter.operations += 1;
    }
    total += getSaleValue(eachSale);
  }
  return total;
}

function getHighestSaleInstrumented(sales, counter) {
  if (!Array.isArray(sales) || sales.length === 0) {
    return null;
  }

  let highestRecord = sales[0];
  let highestAmount = getSaleValue(highestRecord);

  for (let i = 1; i < sales.length; i++) {
    if (counter && typeof counter.operations === "number") {
      counter.operations += 1;
    }
    const currentSale = sales[i];
    const currentAmount = getSaleValue(currentSale);

    if (currentAmount > highestAmount) {
      highestAmount = currentAmount;
      highestRecord = currentSale;
    }
  }

  return highestRecord;
}

function totalRevenuePerCityInstrumented(sales, counter) {
  const accumulator = {};
  if (!Array.isArray(sales) || sales.length === 0) {
    return {};
  }
  for (const sale of sales) {
    if (counter && typeof counter.operations === "number") {
      counter.operations += 1;
    }
    const normalized = (sale?.city || "").trim().toLowerCase();
    const cleanCity =
      cityMap[normalized] ||
      (normalized
        ? normalized.charAt(0).toUpperCase() + normalized.slice(1)
        : "UNKNOWN");
    const calculateLineTotal = getSaleValue(sale);
    accumulator[cleanCity] = (accumulator[cleanCity] || 0) + calculateLineTotal;
  }
  return accumulator;
}

function recurringClients(sales) {
  if (!Array.isArray(sales) || sales.length === 0) {
    return [];
  }
  const repeats = [];

  for (let i = 0; i < sales.length; i++) {
    const clientI = sales[i]?.client;
    if (!clientI) continue;

    for (let j = i + 1; j < sales.length; j++) {
      const clientJ = sales[j]?.client;
      if (clientI === clientJ && !repeats.includes(clientI)) {
        repeats.push(clientI);
      }
    }
  }
  return repeats;
}

function setRecurringClients(sales) {
  if (!Array.isArray(sales) || sales.length === 0) {
    return [];
  }
  let seenCustomers = new Set()
  let recurringCustomers = new Set()
  for (const sale of sales) {
    const cliente = (sale?.client || "")
    if (!cliente) continue
    if (seenCustomers.has(cliente)) {
      recurringCustomers.add(cliente)
    } else {
      seenCustomers.add(cliente)
    }
  }
  return Array.from(recurringCustomers)
}

function mapRecurringClients(sales) {
  if (!Array.isArray(sales) || sales.length === 0) {
    return [];
  }
  const purchaseCounts = new Map()
  for (const sale of sales) {
    const client = (sale?.client || "")
    if (!client) continue
    if (purchaseCounts.has(client)) {
      const currentCount = purchaseCounts.get(client);
      purchaseCounts.set(client, currentCount + 1);
    } else {
      purchaseCounts.set(client, 1);
    }
  }
  let recurringCustomers = []
  purchaseCounts.forEach((value, key) => {
    if (value > 1) {
      recurringCustomers.push(key)
    }
  })
  return recurringCustomers
}

function cityTotalChain(sales, targetCity) {
  if (
    !Array.isArray(sales) ||
    sales.length === 0 ||
    typeof targetCity !== "string"
  ) {
    return 0;
  }
  const normalizedTarget = targetCity.trim().toLowerCase();

  return sales
    .map((sale) => ({
      city: (sale?.city || "").trim().toLowerCase(),
      value: getSaleValue(sale)
    }))
    .filter((sale) => sale.city === normalizedTarget)
    .map((sale) => sale.value)
    .reduce((acc, currentValue) => acc + currentValue, 0);
}

function cityTotalSinglePass(sales, targetCity) {
  if (
    !Array.isArray(sales) ||
    sales.length === 0 ||
    typeof targetCity !== "string"
  ) {
    return 0;
  }
  const normalizedTarget = targetCity.trim().toLowerCase();
  let total = 0;
  for (const sale of sales) {
    if ((sale?.city || "").trim().toLowerCase() === normalizedTarget) {
      total += getSaleValue(sale);
    }
  }
  return total;
}

function bruteForceCombinationFunction(catalog, value) {
  if (!Array.isArray(catalog) || catalog.length < 2 || typeof value !== 'number') {
    return null;
  }
  for (let i = 0; i < catalog.length; i++) {
    for (let j = i + 1; j < catalog.length; j++) {
      const comboValue = catalog[i].price + catalog[j].price;
      if (comboValue === value) {
        return [catalog[i], catalog[j]]
      }
    }
  }
  return null;
}

function optimizedCombinationFunction(catalog, value) {
  if (!Array.isArray(catalog) || catalog.length < 2 || typeof value !== 'number') {
    return null;
  }
  const seenPrices = new Map()
  for (const item of catalog) {
    const required = value - item.price;
    if (seenPrices.has(required)) {
      return [item, seenPrices.get(required)]
    } else {
      seenPrices.set(item.price, item)
    }
  }
  return null
}

// For every city, return the product that appears most often in that city’s sales.
function starProductByCity(sales) {
  if (!Array.isArray(sales) || sales.length === 0) {
    return {};
  }
  const productCounts = new Map();
  for (const sale of sales) {
    const city = (sale?.city || "").trim().toLowerCase();
    const product = (sale?.product || "").trim();

    if (!city || !product) {
      continue;
    }

    if (!productCounts.has(city)) {
      productCounts.set(city, new Map());
    }

    const cityProducts = productCounts.get(city);

    if (cityProducts.has(product)) {
      const currentCount = cityProducts.get(product);
      cityProducts.set(product, currentCount + 1);
    } else {
      cityProducts.set(product, 1);
    }
  }
  const finalResults = {}
  for (const [city, cityProducts] of productCounts) {
    let winner = null
    let highestCount = 0
    for (const [product, count] of cityProducts) {
      if (count > highestCount) {
        highestCount = count
        winner = product
      }
    }
    finalResults[city] = winner
  }
  return finalResults
}

// Return the first client, in the original sales order, who appears exactly once in the entire sales history.
function firstSinglePurchaseClient(sales) {
  if (!Array.isArray(sales) || sales.length === 0) {
    return null
  }
  const clientCounts = new Map();
  for (const sale of sales) {
    const client = sale?.client;
    if (!client) {
      continue;
    }
    if (clientCounts.has(client)) {
      const currentCount = clientCounts.get(client);
      clientCounts.set(client, currentCount + 1);
    } else {
      clientCounts.set(client, 1);
    }
  }
  for (const sale of sales) {
    const client = sale?.client;
    if (clientCounts.get(client) === 1) {
      return client
    }
  }
  return null
}

function bestWeekBrute(days, k) {
  if (!Array.isArray(days) || days.length === 0 || typeof k !== 'number' || k <= 0 || k > days.length) {
    return null;
  }
  // Starting at -Infinity guarantees that even if every day lost money (negative numbers), the first window's total will still be greater than -Infinity and properly recorded.
  let maxRevenue = -Infinity;
  let maxStartDay = 0;
  for (let i = 0; i <= days.length - k; i++) {
    let currentRevenue = 0;
    for (let j = 0; j < k; j++) {
      const dayIndex = i + j;
      currentRevenue += days[dayIndex];
    }
    if (currentRevenue > maxRevenue) {
      maxRevenue = currentRevenue;
      maxStartDay = i + 1;
    }
  }
  return {
    maxTotal: maxRevenue,
    startDay: maxStartDay
  };
}

function optimizedBestWeek(days, k) {
  if (!Array.isArray(days) || days.length === 0 || typeof k !== 'number' || k <= 0 || k > days.length) {
    return null;
  }
  let currentTotal = 0;
  // 1. Build the first window (indices 0 to k - 1)
  for (let i = 0; i < k; i++) {
    currentTotal += days[i];
  }
  let maxRevenue = currentTotal;
  let maxStartDay = 1;
  // 2. Slide the window one day at a time from index k to the end
  for (let dayEntering = k; dayEntering < days.length; dayEntering++) {
    const dayLeaving = dayEntering - k;
    currentTotal = currentTotal - days[dayLeaving] + days[dayEntering];
    if (currentTotal > maxRevenue) {
      maxRevenue = currentTotal;
      maxStartDay = dayLeaving + 2; // The new window starts right after the day that left
    }
  }
  return {
    maxTotal: maxRevenue,
    startDay: maxStartDay
  };
}

function closestPairWithinBudget(products, budget) {
  if (
    !Array.isArray(products) ||
    products.length < 2 ||
    typeof budget !== "number" ||
    budget <= 0
  ) {
    return null;
  }
  // puts cheaper products first.
  const sortedProducts = [...products].sort((a, b) => a.price - b.price);
  let left = 0;
  let right = sortedProducts.length - 1;
  let bestPair = null;
  let bestTotal = 0;

  // The two-pointer loop goes here.
  while (left < right) {
    const currentTotal = sortedProducts[left].price + sortedProducts[right].price;
    if (currentTotal <= budget && currentTotal > bestTotal) {
      bestTotal = currentTotal;
      bestPair = [
        sortedProducts[left],
        sortedProducts[right]
      ];
    }
    if (currentTotal < budget) {
      left++;
    } else {
      right--;
    }
  }
  return bestPair;
}

module.exports = {
  getSaleValue,
  firstSale,
  firstSaleInstrumented,
  getTotalSales,
  totalSalesM,
  getTotalUnits,
  totalUnitsM,
  getHighestSale,
  getAverageTicket,
  getSalesByCity,
  salesByCityM,
  // Aggregations & Groupings (with aliases)
  totalRevenuePerCity,
  totalByCity: totalRevenuePerCity,
  UnitsSoldPerProduct,
  unitsByProduct: UnitsSoldPerProduct,
  topProductsByRevenue,
  salesByDate,
  // Instrumented versions for benchmarking
  getTotalSalesInstrumented,
  getHighestSaleInstrumented,
  totalRevenuePerCityInstrumented,
  // Algorithms and Pipeline variants
  recurringClients,
  cityTotalChain,
  cityTotalSinglePass,
  setRecurringClients,
  mapRecurringClients,
  bruteForceCombinationFunction,
  optimizedCombinationFunction,
  starProductByCity,
  firstSinglePurchaseClient,
  bestWeekBrute,
  optimizedBestWeek,
  closestPairWithinBudget,
};
