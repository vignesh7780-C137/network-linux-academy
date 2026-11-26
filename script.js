const menuButton = document.getElementById("menu-toggle");
const navigation = document.getElementById("navigation");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    navigation.classList.toggle("active");
  });

  document.querySelectorAll(".navigation a").forEach(link => {
    link.addEventListener("click", () => {
      navigation.classList.remove("active");
    });
  });
}

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

/* WEBSITE SEARCH ENGINE
   Keep this list synchronized with the HTML files in /articles.
*/

const articles = [
  {
    title: "Linux Users and Groups Explained",
    url: "articles/linux-users-and-groups.html",
    category: "Linux System Administration",
    description: "Learn Linux user accounts, UIDs, GIDs, account files, password management, groups, sudo, and secure account administration.",
    keywords: "Linux users groups UID GID useradd usermod userdel groupadd passwd shadow sudo visudo getent account administration permissions"
  },
  {
    title: "Linux Command Line Basics",
    url: "articles/linux-command-line-basics.html",
    category: "Linux Fundamentals",
    description: "Learn terminal navigation, file management, essential commands, system information, and basic permissions.",
    keywords: "Linux command line terminal shell Bash filesystem pwd ls cd mkdir touch cp mv rm cat less grep find chmod permissions sudo system administration"
  },
  {
    title: "Access Control Lists (ACLs) Explained",
    url: "articles/access-control-lists.html",
    category: "Network Security",
    description: "Learn standard and extended ACLs, wildcard masks, traffic filtering, and Cisco configuration.",
    keywords: "ACL access control list standard extended wildcard mask named numbered inbound outbound Cisco security"
  },
  {
    title: "BGP Explained",
    url: "articles/bgp-explained.html",
    category: "Routing",
    description: "Understand Border Gateway Protocol, autonomous systems, eBGP, iBGP, path attributes, and route selection.",
    keywords: "BGP Border Gateway Protocol autonomous system ASN eBGP iBGP AS_PATH NEXT_HOP LOCAL_PREF MED TCP 179 Internet routing"
  },
  {
    title: "DHCP Explained",
    url: "articles/dhcp-explained.html",
    category: "Network Services",
    description: "Learn DHCP, the DORA process, address leases, DHCP relay, and Cisco configuration.",
    keywords: "DHCP Dynamic Host Configuration Protocol DORA discover offer request acknowledgement server client relay lease"
  },
  {
    title: "DNS: Domain Name System Explained",
    url: "articles/dns-domain-name-system.html",
    category: "Network Services",
    description: "Understand DNS resolution, records, hierarchy, caching, and troubleshooting.",
    keywords: "DNS Domain Name System domain resolution records A AAAA CNAME MX recursive resolver caching nslookup dig port 53"
  },
  {
    title: "EIGRP Explained",
    url: "articles/eigrp-explained.html",
    category: "Routing",
    description: "Understand EIGRP, DUAL, successor and feasible successor routes, metrics, configuration, and troubleshooting.",
    keywords: "EIGRP Enhanced Interior Gateway Routing Protocol DUAL successor feasible successor reported distance feasible distance metric K values Cisco"
  },
  {
    title: "EtherChannel Explained",
    url: "articles/etherchannel-explained.html",
    category: "Switching",
    description: "Learn link aggregation, EtherChannel, LACP, PAgP, configuration, and verification.",
    keywords: "EtherChannel LACP PAgP link aggregation port channel channel group Cisco switching"
  },
  {
    title: "Inter-VLAN Routing Explained",
    url: "articles/inter-vlan-routing.html",
    category: "Switching",
    description: "Understand Router-on-a-Stick, Layer 3 switching, SVIs, 802.1Q, and inter-VLAN routing.",
    keywords: "Inter VLAN routing Router on a Stick Layer 3 switch SVI subinterface 802.1Q VLAN routing"
  },
  {
    title: "IPv4 Addressing Explained",
    url: "articles/ipv4-addressing.html",
    category: "IP Addressing",
    description: "Learn IPv4 address structure, network and host portions, address classes, and subnet masks.",
    keywords: "IPv4 Internet Protocol address octet network host subnet mask public private unicast address"
  },
  {
    title: "IPv6 Addressing Explained",
    url: "articles/ipv6-addressing.html",
    category: "IP Addressing",
    description: "Learn IPv6 address structure, hexadecimal notation, address types, SLAAC, DHCPv6, and configuration.",
    keywords: "IPv6 IPv4 hexadecimal global unicast link local multicast unique local SLAAC DHCPv6 address compression"
  },
  {
    title: "Network Address Translation (NAT) Explained",
    url: "articles/nat-explained.html",
    category: "Routing",
    description: "Understand Static NAT, Dynamic NAT, PAT, NAT Overload, and Cisco configuration.",
    keywords: "NAT Network Address Translation Static NAT Dynamic NAT PAT NAT Overload inside local inside global outside local outside global"
  },
  {
    title: "Understanding the OSI Model",
    url: "articles/osi-model.html",
    category: "Networking Fundamentals",
    description: "Learn the seven layers of the OSI model and their networking functions.",
    keywords: "OSI Open Systems Interconnection seven layers physical data link network transport session presentation application protocols"
  },
  {
    title: "Advanced OSPF Explained",
    url: "articles/ospf-advanced.html",
    category: "Routing",
    description: "Explore OSPF areas, LSAs, LSDB, SPF, DR and BDR elections, neighbor states, and multi-area configuration.",
    keywords: "advanced OSPF areas Area 0 LSA LSDB SPF Dijkstra DR BDR ABR ASBR multi area adjacency neighbor states"
  },
  {
    title: "OSPF Introduction",
    url: "articles/ospf-introduction.html",
    category: "Routing",
    description: "Learn the fundamentals of Open Shortest Path First dynamic routing.",
    keywords: "OSPF Open Shortest Path First link state routing cost router ID hello packets adjacency shortest path"
  },
  {
    title: "Route Redistribution Explained",
    url: "articles/route-redistribution.html",
    category: "Routing",
    description: "Understand route redistribution between OSPF, EIGRP, and BGP, seed metrics, administrative distance, and route tagging.",
    keywords: "route redistribution OSPF EIGRP BGP seed metric administrative distance route maps route tagging routing loops Cisco IOS"
  },
  {
    title: "Spanning Tree Protocol (STP) Explained",
    url: "articles/stp-explained.html",
    category: "Switching",
    description: "Understand switching loops, root bridge election, STP port roles, RSTP, and Cisco configuration.",
    keywords: "STP Spanning Tree Protocol root bridge root port designated port alternate port BPDU RSTP switching loops"
  },
  {
    title: "IPv4 Subnetting for Beginners",
    url: "articles/subnetting-for-beginners.html",
    category: "IP Addressing",
    description: "Learn subnet masks, CIDR notation, network addresses, broadcast addresses, host ranges, and VLSM.",
    keywords: "subnetting IPv4 subnet mask CIDR network address broadcast address host range VLSM prefix length"
  },
  {
    title: "TCP vs UDP Explained",
    url: "articles/tcp-vs-udp.html",
    category: "Networking Fundamentals",
    description: "Compare TCP and UDP, their transport-layer behavior, reliability, ports, and use cases.",
    keywords: "TCP UDP Transmission Control Protocol User Datagram Protocol transport layer ports reliable connection oriented connectionless"
  },
  {
    title: "What Is a VLAN? Explained",
    url: "articles/vlan-explained.html",
    category: "Switching",
    description: "Understand VLANs, broadcast domains, access ports, trunk ports, and inter-VLAN routing.",
    keywords: "VLAN Virtual LAN broadcast domain switching access port trunk port 802.1Q inter VLAN routing"
  },
  {
    title: "VLAN Trunking Explained: IEEE 802.1Q",
    url: "articles/vlan-trunking.html",
    category: "Switching",
    description: "Learn access ports, trunk ports, IEEE 802.1Q tagging, native VLANs, and Cisco trunk configuration.",
    keywords: "VLAN trunking 802.1Q trunk port access port native VLAN allowed VLAN tagging Cisco switching"
  }
];

const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("site-search");
const searchResults = document.getElementById("search-results");

if (searchForm && searchInput && searchResults) {
  function searchArticles(query) {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      searchResults.classList.remove("visible");
      searchResults.innerHTML = "";
      return;
    }

    const matches = articles.filter(article => {
      const searchableText = [
        article.title,
        article.category,
        article.description,
        article.keywords
      ].join(" ").toLowerCase();

      return searchableText.includes(normalizedQuery);
    });

    searchResults.innerHTML = "";

    if (matches.length === 0) {
      searchResults.innerHTML =
        '<div class="no-results">No matching tutorials found. Try another keyword.</div>';
    } else {
      matches.forEach(article => {
        const link = document.createElement("a");
        link.className = "search-result";
        link.href = article.url;

        const title = document.createElement("strong");
        title.textContent = article.title;

        const category = document.createElement("span");
        category.textContent = article.category;

        link.append(title, category);
        searchResults.appendChild(link);
      });
    }

    searchResults.classList.add("visible");
  }

  searchInput.addEventListener("input", () => {
    searchArticles(searchInput.value);
  });

  searchForm.addEventListener("submit", event => {
    event.preventDefault();
    searchArticles(searchInput.value);

    const firstResult = searchResults.querySelector("a");

    if (firstResult) {
      window.location.href = firstResult.href;
    }
  });

  document.addEventListener("click", event => {
    if (!searchForm.contains(event.target) &&
        !searchResults.contains(event.target)) {
      searchResults.classList.remove("visible");
    }
  });
}
