import { useState, useEffect } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import StarRating from "../../components/StarRating/StarRating";
import { getArtisanById, sendContact } from "../../services/api";
import "./ArtisanDetail.scss";

const ArtisanDetail = () => {
  const { id } = useParams();

  const [artisan, setArtisan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const [form, setForm] = useState({ nom: "", prenom: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    getArtisanById(id)
      .then((res) => setArtisan(res.data.data))
      .catch(() => setNotFound(true))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p className="text-center py-5">Chargement...</p>;
  if (notFound) return <Navigate to="/artisans" replace />;

  const { nom, specialite, note, ville, apropos, siteWeb } = artisan;
  const categorie = artisan.specialite?.categorie?.nom || "";
  const specialiteNom = artisan.specialite?.nom || specialite;

  const validate = () => {
    const e = {};
    if (!form.nom.trim()) e.nom = "Le nom est requis.";
    if (!form.prenom.trim()) e.prenom = "Le prénom est requis.";
    if (!form.email.trim()) e.email = "L'email est requis.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Email invalide.";
    if (form.message.trim().length < 10) e.message = "Message trop court (min 10 caractères).";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSending(true);
    try {
      await sendContact({ ...form, artisanId: artisan.id });
      setSuccess(true);
    } catch {
      setErrors({ api: "Une erreur est survenue. Réessayez." });
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="detail-page">
      <div className="container py-5">

        {/* Fil d'Ariane */}
        <nav aria-label="Fil d'Ariane" className="detail-page__breadcrumb">
          <Link to="/artisans">Nos Artisans</Link>
          <span> - </span>
          <Link to={`/artisans?categorie=${encodeURIComponent(categorie)}`}>{categorie}</Link>
          <span> - </span>
          <span aria-current="page">{nom}</span>
        </nav>

        <h1 className="section-title">Nos Artisans - {categorie} - {nom}</h1>

        <div className="row g-4">

          {/* Colonne gauche */}
          <div className="col-12 col-lg-4">
            <div className="detail-card">
              <h2 className="detail-card__nom">{nom}</h2>
              <StarRating note={parseFloat(note)} size="lg" />
              <p className="detail-card__specialite">{specialiteNom}</p>
              <p className="detail-card__ville">{ville}</p>
              <div className="detail-card__photo">
                <img
                  src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&h=260&fit=crop"
                  alt={`Artisan ${specialiteNom}`}
                  loading="lazy"
                />
              </div>
              {siteWeb && (
                <a href={siteWeb} target="_blank" rel="noopener noreferrer" className="detail-card__site">
                  🌐 {siteWeb.replace("https://", "")}
                </a>
              )}
            </div>
          </div>

          {/* Colonne droite */}
          <div className="col-12 col-lg-8">

            {/* À Propos */}
            <div className="detail-apropos">
              <h3 className="detail-apropos__title">A Propos :</h3>
              <p>{apropos}</p>
            </div>

            {/* Formulaire */}
            <div className="detail-form-card">
              <h3 className="detail-form-card__title">Contacter l'artisan :</h3>

              {success ? (
                <div className="detail-form-card__success" role="alert">
                  ✓ Message envoyé ! L'artisan vous répondra sous 48h.
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>

                  {errors.api && (
                    <p className="text-danger mb-3" role="alert">{errors.api}</p>
                  )}

                  <div className="row g-3 mb-3">
                    <div className="col-12 col-md-6">
                      <input
                        type="text"
                        name="nom"
                        className={`detail-input ${errors.nom ? "is-invalid" : ""}`}
                        placeholder="Nom"
                        value={form.nom}
                        onChange={handleChange}
                        aria-label="Votre nom"
                        aria-required="true"
                      />
                      {errors.nom && <span className="detail-input__error" role="alert">{errors.nom}</span>}
                    </div>
                    <div className="col-12 col-md-6">
                      <input
                        type="text"
                        name="prenom"
                        className={`detail-input ${errors.prenom ? "is-invalid" : ""}`}
                        placeholder="Prénom"
                        value={form.prenom}
                        onChange={handleChange}
                        aria-label="Votre prénom"
                        aria-required="true"
                      />
                      {errors.prenom && <span className="detail-input__error" role="alert">{errors.prenom}</span>}
                    </div>
                  </div>

                  <div className="mb-3">
                    <input
                      type="email"
                      name="email"
                      className={`detail-input ${errors.email ? "is-invalid" : ""}`}
                      placeholder="E-Mail"
                      value={form.email}
                      onChange={handleChange}
                      aria-label="Votre email"
                      aria-required="true"
                    />
                    {errors.email && <span className="detail-input__error" role="alert">{errors.email}</span>}
                  </div>

                  <div className="detail-form-card__message-row">
                    <textarea
                      name="message"
                      className={`detail-input detail-input--textarea ${errors.message ? "is-invalid" : ""}`}
                      placeholder="Votre message..."
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      aria-label="Votre message"
                      aria-required="true"
                    />
                    <button type="submit" className="btn-contacter" disabled={sending}>
                      <MdEmail /> {sending ? "Envoi..." : "Envoyer"}
                    </button>
                  </div>
                  {errors.message && <span className="detail-input__error" role="alert">{errors.message}</span>}

                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ArtisanDetail;