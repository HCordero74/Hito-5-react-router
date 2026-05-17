const Profile = () => {
  return (
    <div className="container my-5 p-5 border rounded shadow-sm bg-light" style={{ maxWidth: "500px" }}>
      <h2 className="mb-4 text-center">👤 Perfil del Usuario</h2>
      <div className="mb-3">
        <strong>Email:</strong> <span className="text-muted">hernan.cordero@ejemplo.com</span>
      </div>
      <button className="btn btn-danger w-100 mt-3">Cerrar Sesión</button>
    </div>
  );
};

export default Profile;