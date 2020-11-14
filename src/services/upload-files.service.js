import axios from 'axios';

class UploadFilesService {

    getFiles() {
        return axios.get("http://localhost:8181/api/test/files");
    }
}

export default new UploadFilesService();