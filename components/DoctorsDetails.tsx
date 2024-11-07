import React from 'react'
import Image from "next/image"
import styles from "./DoctersDetails.module.css"

const DoctorsDetails = () => {
  return (
    <>
    <div className={styles.doctorsContainer}>
      <div className={styles.doctor}>
        <h1 className={styles.doctorName}>Dr Catherine Castillo</h1>
        <h3 className={styles.specialization}>Dermatologist</h3>
        <p className={styles.description}>
            Specializes in diagnosing and treating skin, hair, and nail conditions, addressing a variety of issues from acne to skin cancer. Dermatologists utilize medical, surgical, and cosmetic interventions to improve skin health and appearance.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/dermatologist.jpeg" // 'public' folder ke andar image ka path
          alt="Dermatologist Image"
          width={300} // Adjust the size as needed
          height={300} // Adjust the size as needed
          className={styles.roundImage}
        />
      </div>
    </div>

    <div className={styles.doctorsContainer}>
      <div className={styles.imageContainer}>
        <Image
          src="/orthodontics.jpeg" // 'public' folder ke andar image ka path
          alt="othodontist Image"
          width={300} // Adjust the size as needed
          height={300} // Adjust the size as needed
          className={styles.roundImage}
        />
      </div>
      <div className={styles.doctor}>
        <h1 className={styles.doctorName}>Dr Alexander Burns</h1>
        <h3 className={styles.specialization}>Orthodontist</h3>
        <p className={styles.description}>
        Specializes in the prevention, and treatment of dental and facial irregularities. They focus on correcting misaligned teeth and jaws, using braces, retainers, and other devices to achieve optimal oral health and improve smiles.
        </p>
      </div>
    </div>

    <div className={styles.doctorsContainer}>
      <div className={styles.doctor}>
        <h1 className={styles.doctorName}>Dr Evan Taller </h1>
        <h3 className={styles.specialization}>Primary Health Care</h3>
        <p className={styles.description}>
        Provides a wide range of services, including preventive care, diagnosis, treatment, and health education. Primary health care aims to provide accessible, affordable, and comprehensive healthcare, focusing on overall well-being and the management of chronic conditions.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/primary doctor.jpeg" // 'public' folder ke andar image ka path
          alt="pediatrician Image"
          width={300} // Adjust the size as needed
          height={300} // Adjust the size as needed
          className={styles.roundImage}
        />
      </div>
    </div>

    <div className={styles.doctorsContainer}>
      <div className={styles.imageContainer}>
        <Image
          src="/pediatrician.jpg" // 'public' folder ke andar image ka path
          alt="othodontist Image"
          width={300} // Adjust the size as needed
          height={300} // Adjust the size as needed
          className={styles.roundImage}
        />
      </div>
      <div className={styles.doctor}>
        <h1 className={styles.doctorName}>Dr Jamie Brannon</h1>
        <h3 className={styles.specialization}>Pediatrician</h3>
        <p className={styles.description}>
        Specializes in the medical care of infants, children, and adolescents. They diagnose and treat a wide range of childhood illnesses, monitor development, and provide preventive care, including vaccinations and health education for parents.
        </p>
      </div>
    </div>

    <div className={styles.doctorsContainer}>
      <div className={styles.doctor}>
        <h1 className={styles.doctorName}>Dr Belly Doe</h1>
        <h3 className={styles.specialization}>Ophthalmology</h3>
        <p className={styles.description}>
        Specializes in the diagnosis, treatment, and prevention of eye disorders and diseases. Ophthalmologists provide comprehensive eye care, including vision correction, management of eye conditions such as glaucoma and cataracts, and surgical interventions.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/opthamology.jpeg" // 'public' folder ke andar image ka path
          alt="pediatrician Image"
          width={300} // Adjust the size as needed
          height={300} // Adjust the size as needed
          className={styles.roundImage}
        />
      </div>
    </div>
    </>
  )
}

export default DoctorsDetails










