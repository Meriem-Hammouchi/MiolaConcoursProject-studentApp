import axios from 'axios';

class UploadFilesService {

    getFiles() {
        return axios.get("http://miolaconcours-student-app.herokuapp.com/api/test/files");
    }
}

export default new UploadFilesService();
