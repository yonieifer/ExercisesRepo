// 1
const extractId = (url) => {
    const parts = url.split("/");
    return parts[2];
};

// 2
const parseQuery = (url) => {
    const query = url.split("?")[1] || "";
    console.log(query);

    const parts = query.split("&").map((detail) => detail.split("="));
    console.log(parts);

    const obj = Object.fromEntries(parts);
    return obj;
};

// 3
const getQueryParams = (rawUrl) => {
    const parsed = new URL(rawUrl, "http://localhost");
    const qs = parsed.searchParams;
    return {
        page: qs.get("page") || "1",
        limit: qs.get("limit") || "10",
        sort: qs.get("sort") || "default"
    }
};

// console.log(getQueryParams("/users?page=3&sort=name"));

// 4
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

const getParam = (url, pattern) => {
    const pp = pattern.split("/")
    const up = url.split("/")

    const key = pp.find(s => s.startsWith(":"))?.slice(1)
    const index = pp.findIndex(s => s.startsWith(":"))

    return {
        [key]: up[index]
    }
}

const { id } = getParam(url, "/users/:id");
const user   = users.find(u => u.id === +id);

// 5
