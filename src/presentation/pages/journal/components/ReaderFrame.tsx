import React, { useEffect } from 'react';
import { ChevronLeft, Share2, Bookmark } from 'lucide-react';
import type { Journal } from '../../../../domain/entities/Journal';

interface ReaderFrameProps {
  article: Journal;
  onBack: () => void;
}

export const ReaderFrame: React.FC<ReaderFrameProps> = ({ article, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="reader-frame">
      <header className="reader-header">
        <button onClick={onBack} className="back-button">
          <ChevronLeft size={20} />
          <span>LIST</span>
        </button>
        <div className="actions">
          <button className="action-button"><Bookmark size={18} /></button>
          <button className="action-button"><Share2 size={18} /></button>
        </div>
      </header>

      <main className="reader-content">
        <header className="article-header">
          <span className="published-at serif">{article.publishedAt}</span>
          <h1 className="article-title">{article.title}</h1>
          <p className="article-subtitle">{article.subTitle}</p>
        </header>

        <div className="article-cover">
          <img src={article.coverImage} alt={article.title} />
        </div>

        <section className="article-body">
          <p>
            맑은 공기가 창틈으로 스며드는 아침, 우리는 각자의 방식으로 하루를 깨웁니다. 
            단순히 눈을 뜨는 행위를 넘어, 마음을 정돈하고 새로운 시간을 맞이하는 
            그 고요한 순간들은 우리 삶의 근간이 됩니다.
          </p>
          <p>
            Achim은 그 찰나의 순간들을 기록하고 공유합니다. 이번 호에서는 당신의 
            아침을 더욱 풍요롭게 만들어줄 다양한 이야기들을 담았습니다. 
            차분하게 차 한 잔을 마시며, 혹은 햇살 아래 책장을 넘기며 
            이 아티클이 당신의 아침에 작은 영감이 되길 바랍니다.
          </p>
          <p>
            본문은 여기에 더 길게 이어질 수 있습니다. 아침의 감성을 담은 
            서정적인 문체와 넉넉한 여백이 독서의 즐거움을 더해줍니다.
          </p>
        </section>

        <footer className="article-footer">
          <div className="tags">
            {article.tags.map(tag => (
              <span key={tag} className="tag-item">#{tag}</span>
            ))}
          </div>
        </footer>
      </main>
    </div>
  );
};
