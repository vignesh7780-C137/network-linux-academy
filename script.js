
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

/* WEBSITE SEARCH ENGINE */

const articles = [

{
    title: "Route Redistribution Explained",
    url: "articles/route-redistribution.html",
    category: "Networking",
    description: "Understand route redistribution between OSPF, EIGRP and BGP, seed metrics, administrative distance, route tagging, configuration and troubleshooting.",
    keywords: "Route Redistribution, OSPF, EIGRP, BGP, seed metric, administrative distance, route maps, route tagging, routing loops, route feedback, Cisco IOS"
},


{
    title: "BGP Explained",
    url: "articles/bgp-explained.html",
    category: "Networking",
    description: "Understand Border Gateway Protocol, autonomous systems, eBGP, iBGP, path attributes, best-path selection, configuration and troubleshooting.",
    keywords: "BGP, Border Gateway Protocol, autonomous system, ASN, eBGP, iBGP, AS_PATH, NEXT_HOP, LOCAL_PREF, MED, BGP attributes, BGP neighbor states, TCP 179, Internet routing"
},


{
    title: "OSPF Introduction",
    url: "articles/ospf-introduction.html",
    category: "Networking",
    description: "Learn the fundamentals of OSPF routing.",
    keywords: "OSPF, routing, link state"
},
{
    title: "Advanced OSPF Explained",
    url: "articles/ospf-advanced.html",
    category: "Networking",
    description: "Learn OSPF areas, LSAs, LSDB, SPF algorithm, DR and BDR elections, neighbor states and multi-area configuration.",
    keywords: "advanced OSPF, OSPF areas, Area 0, LSA, LSDB, SPF, Dijkstra, DR, BDR, ABR, ASBR, multi-area OSPF"
},

{
    title: "EIGRP Explained",
    url: "articles/eigrp-explained.html",
    category: "Networking",
    description: "Understand EIGRP, DUAL, successor and feasible successor routes, metrics, configuration and troubleshooting.",
    keywords: "EIGRP, Enhanced Interior Gateway Routing Protocol, DUAL, successor, feasible successor, autonomous system, routing protocol, Cisco EIGRP, neighbor adjacency"
},


{
    title: "IPv6 Addressing Explained",
    url: "articles/ipv6-addressing.html",
    category: "Networking",
    description: "Learn IPv6 address structure, hexadecimal notation, address types, SLAAC, DHCPv6 and Cisco configuration.",
    keywords: "IPv6, IPv4 vs IPv6, global unicast, link local, multicast, unique local, SLAAC, DHCPv6, hexadecimal addressing"
},

{
    title: "Network Address Translation (NAT) Explained",
    url: "articles/nat-explained.html",
    category: "Networking",
    description: "Understand Static NAT, Dynamic NAT, PAT, NAT Overload, IPv4 address translation and Cisco configuration.",
    keywords: "NAT, network address translation, static NAT, dynamic NAT, PAT, NAT overload, inside local, inside global, outside local, outside global"
},


{
    title: "Access Control Lists (ACLs) Explained",
    url: "articles/access-control-lists.html",
    category: "Networking",
    description: "Learn standard ACLs, extended ACLs, wildcard masks, inbound and outbound filtering, and Cisco configuration.",
    keywords: "ACL, access control lists, standard ACL, extended ACL, wildcard mask, numbered ACL, named ACL, Cisco security"
},

{
    title: "Inter-VLAN Routing Explained",
    url: "articles/inter-vlan-routing.html",
    category: "Networking",
    description: "Understand Router-on-a-Stick, Layer 3 switching, SVIs, 802.1Q and Cisco inter-VLAN routing configuration.",
    keywords: "Inter-VLAN routing, Router on a Stick, Layer 3 switch, SVI, subinterfaces, 802.1Q, VLAN routing"
},

{
    title: "EtherChannel Explained",
    url: "articles/etherchannel-explained.html",
    category: "Networking",
    description: "Learn EtherChannel, LACP, PAgP, link aggregation, configuration and verification commands.",
    keywords: "EtherChannel, LACP, PAgP, link aggregation, port channel, Cisco switching"
},

{
    title: "Spanning Tree Protocol (STP) Explained",
    url: "articles/stp-explained.html",
    category: "Networking",
    description: "Understand switching loops, root bridge election, STP port roles, RSTP and Cisco configuration.",
    keywords: "STP, spanning tree protocol, root bridge, root port, designated port, RSTP, BPDU, switching loops"
},

{
    title: "VLAN Trunking Explained: IEEE 802.1Q",
    url: "articles/vlan-trunking.html",
    category: "Networking",
    description: "Learn access ports, trunk ports, IEEE 802.1Q tagging, native VLANs, and Cisco trunk configuration.",
    keywords: "VLAN trunking, 802.1Q, trunk port, access port, native VLAN, allowed VLANs, Cisco switching"
},

{
    title: "DNS Explained: How the Domain Name System Works",
    url: "articles/dns-explained.html",
    category: "Networking",
    description: "Understand DNS resolution, DNS records, recursive resolvers, caching, and DNS troubleshooting.",
    keywords: "DNS, domain name system, DNS records, A record, AAAA, CNAME, MX, nslookup, dig, DNS troubleshooting"
},


{
    title: "How DHCP Works: A Complete Beginner's Guide",
    url: "articles/dhcp-explained.html",
    category: "Networking",
    description: "Learn DHCP, the DORA process, IP address leases, DHCP relay, and Cisco DHCP configuration.",
    keywords: "DHCP, DORA, DHCP server, DHCP client, DHCP relay, Cisco DHCP, Packet Tracer"
},


{
    title: "What Is a VLAN? A Complete Beginner's Guide",
    url: "articles/vlan-explained.html",
    category: "Networking",
    description: "Understand VLANs, broadcast domains, access ports, trunk ports, 802.1Q tagging, and inter-VLAN routing with a practical Packet Tracer lab.",
    keywords: "VLAN, virtual LAN, switching, access port, trunk port, 802.1Q, inter-VLAN routing, Packet Tracer, CCNA"
},


{
    title: "IPv4 Subnetting for Beginners",
    url: "articles/subnetting-for-beginners.html",
    category: "Networking",
    description: "Learn subnet masks, CIDR notation, network addresses, broadcast addresses, host ranges, and VLSM with worked examples.",
    keywords: "subnetting, IPv4, subnet mask, CIDR, network address, broadcast address, VLSM, CCNA"
},

  {
    title: "DNS: Domain Name System Explained",
    category: "Networking Fundamentals",
    description: "Learn DNS resolution, records, hierarchy, caching and Linux troubleshooting.",
    url: "articles/dns-domain-name-system.html",
    keywords: ["dns", "domain name system", "domain resolution", "dns records", "dns server", "nslookup", "dig", "port 53"]
  },
  {
    title: "Understanding the OSI Model",
    category: "Networking Fundamentals",
    description: "Learn the seven layers of the OSI model.",
    url: "articles/osi-model.html",
    keywords: ["osi", "layers", "networking", "protocols"]
  },
  {
    title: "IPv4 Addressing Explained",
    category: "IP Addressing",
    description: "Learn IP addresses, subnet masks and network IDs.",
    url: "articles/ipv4-addressing.html",
    keywords: ["ipv4", "ip", "address", "subnet", "mask"]
  },
  {
    title: "Introduction to OSPF",
    category: "Routing",
    description: "Understand dynamic routing and OSPF.",
    url: "articles/ospf-introduction.html",
    keywords: ["ospf", "routing", "router", "dynamic routing"]
  },
  {
    title: "Essential Linux Commands",
    category: "Linux",
    description: "Learn the essential Linux terminal commands.",
    url: "articles/linux-commands.html",
    keywords: ["linux", "commands", "terminal", "bash"]
  },
  {
    title: "Linux File Permissions",
    category: "Linux Administration",
    description: "Understand chmod, chown, users and groups.",
    url: "articles/linux-permissions.html",
    keywords: ["linux", "permissions", "chmod", "chown"]
  },
  {
    title: "Understanding Linux Services",
    category: "Linux Administration",
    description: "Learn how to manage Linux system services.",
    url: "articles/linux-services.html",
    keywords: ["linux", "services", "systemctl", "administration"]
  },
  {
    title: "TCP vs UDP: Understanding the Differences",
    category: "Networking",
    description: "Learn how TCP and UDP work, their differences, use cases, ports, and transport-layer communication.",
    url: "articles/tcp-vs-udp.html",
    keywords: ["tcp", "udp", "transmission control protocol", "user datagram protocol", "transport layer", "ports", "connection", "reliable", "connectionless"]
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
      const keywordText = Array.isArray(article.keywords)
        ? article.keywords.join(" ")
        : (article.keywords || "");

      const searchableText = [
        article.title,
        article.category,
        article.description,
        keywordText
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