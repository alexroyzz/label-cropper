import { CONTACT } from "./footerData.js";

function PrivacyPolicy() {
  return (
    <>
      <p>
        This policy describes information handled when you use Label Cropper.
        The PDF tool runs in your browser and does not send the files you
        choose to a Label Cropper application server.
      </p>
      <section>
        <h2>PDF files and results</h2>
        <p>
          Selected PDFs are read in your browser to find and crop supported
          Meesho or Flipkart labels. The generated PDF and preview are also
          created in the browser. The app code does not upload those files;
          downloading a result is initiated by you through your browser.
        </p>
      </section>
      <section>
        <h2>Saved preference</h2>
        <p>
          If your browser allows local storage, the site saves your light or
          dark theme choice on your device under the key <code>lc-theme</code>.
          The app does not use this preference to identify you.
        </p>
      </section>
      <section>
        <h2>Website requests and fonts</h2>
        <p>
          Your browser requests the pages and files needed to display the site.
          The app code does not configure an analytics service, account system,
          contact form, or application backend. The site loads the Bricolage
          Grotesque font from Google Fonts; requests for those font resources
          are handled by Google. Website hosting may also process ordinary
          connection data as part of serving the site.
        </p>
      </section>
      <section>
        <h2>Contact</h2>
        <p>
          For questions about this policy, email{" "}
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
        </p>
      </section>
    </>
  );
}

function TermsAndConditions() {
  return (
    <>
      <p>
        Label Cropper provides a free, browser-based tool and guides for
        preparing shipping-label PDFs. By using the site, you agree to these
        terms.
      </p>
      <section>
        <h2>Using the tool</h2>
        <p>
          Use only files you are authorized to process. The tool is designed
          for supported Meesho and Flipkart label layouts; detection and results
          can vary with PDF content and layout. Review the preview and check
          each crop, address, and barcode before printing or using the output.
        </p>
      </section>
      <section>
        <h2>Marketplace names</h2>
        <p>
          Meesho and Flipkart are referenced to identify supported label
          formats. Label Cropper is an independent tool and is not affiliated
          with either marketplace. Their respective names and marks belong to
          their owners.
        </p>
      </section>
      <section>
        <h2>Questions</h2>
        <p>
          For questions about these terms, email{" "}
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
        </p>
      </section>
    </>
  );
}

export default function LegalPage({ page }) {
  return (
    <article className="info legal-page">
      <h1>{page.h1}</h1>
      {page.type === "privacy" ? <PrivacyPolicy /> : <TermsAndConditions />}
    </article>
  );
}
