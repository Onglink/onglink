import axios from 'axios';

export async function uploadImagemParaCloudinary(file: File): Promise<string> {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'onglinkCloud'); // substitua pelo seu
  formData.append('folder', 'onglink'); // opcional

  const response = await axios.post(
    'https://api.cloudinary.com/v1_1/onglinkCloud/image/upload',
    formData
  );

  return response.data.secure_url;
}
