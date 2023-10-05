const [requests, setRequests] = useState([])

  const getRequests = async () => {
    try {
      const req = await fetch(`/api/requests/getAll`, {
        method: "GET"
      })

      if (!req.ok) {
        console.error('Error fetching requests:', req.status, req.statusText)
        return []
      }

      return await req.json()

    } catch (e) {
      console.error("An error occurred trying to fetch the request:", e)
      return [] // Return empty array when an error occurs
    }
  }

  useEffect(() => {
    getRequests()
      .then((requests) => setRequests(requests))
      .catch((error) => {
        console.error("Error checking for existing request:", error)
      })
  },[]) // Empty dependency array ensures the effect runs once on mount