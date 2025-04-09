export const fetch = {
    // Basic fetch with error handling
    get: async (url, options = {}) => {
      try {
        const response = await window.fetch(url, { 
          method: 'GET',
          ...options
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
      } catch (error) {
        console.error(`Fetch GET error: ${error.message}`);
        throw error;
      }
    },
  
    // POST with JSON body
    post: async (url, data = {}, options = {}) => {
      try {
        const response = await window.fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ...options.headers
          },
          body: JSON.stringify(data),
          ...options
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
      } catch (error) {
        console.error(`Fetch POST error: ${error.message}`);
        throw error;
      }
    },
  
    // PUT with JSON body
    put: async (url, data = {}, options = {}) => {
      try {
        const response = await window.fetch(url, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            ...options.headers
          },
          body: JSON.stringify(data),
          ...options
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
      } catch (error) {
        console.error(`Fetch PUT error: ${error.message}`);
        throw error;
      }
    },
  
    // DELETE method
    delete: async (url, options = {}) => {
      try {
        const response = await window.fetch(url, {
          method: 'DELETE',
          ...options
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
      } catch (error) {
        console.error(`Fetch DELETE error: ${error.message}`);
        throw error;
      }
    },
  
    // PATCH with JSON body
    patch: async (url, data = {}, options = {}) => {
      try {
        const response = await window.fetch(url, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            ...options.headers
          },
          body: JSON.stringify(data),
          ...options
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
      } catch (error) {
        console.error(`Fetch PATCH error: ${error.message}`);
        throw error;
      }
    },
  
    // Raw fetch for custom requests
    raw: async (url, options = {}) => {
      try {
        const response = await window.fetch(url, options);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response;
      } catch (error) {
        console.error(`Fetch RAW error: ${error.message}`);
        throw error;
      }
    },
  
    // Get text response instead of JSON
    getText: async (url, options = {}) => {
      try {
        const response = await window.fetch(url, { 
          method: 'GET',
          ...options
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.text();
      } catch (error) {
        console.error(`Fetch getText error: ${error.message}`);
        throw error;
      }
    },
  
    // Get blob response (for files, images, etc.)
    getBlob: async (url, options = {}) => {
      try {
        const response = await window.fetch(url, { 
          method: 'GET',
          ...options
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.blob();
      } catch (error) {
        console.error(`Fetch getBlob error: ${error.message}`);
        throw error;
      }
    },
  
    // Upload a file
    uploadFile: async (url, fileData, fileName = 'file', options = {}) => {
      try {
        const formData = new FormData();
        formData.append(fileName, fileData);
        
        const response = await window.fetch(url, {
          method: 'POST',
          body: formData,
          ...options
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
      } catch (error) {
        console.error(`Fetch uploadFile error: ${error.message}`);
        throw error;
      }
    }
  };