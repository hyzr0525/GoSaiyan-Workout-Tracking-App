class CreateExercises < ActiveRecord::Migration[6.1]
  def change
    create_table :exercises do |t|
      t.string :name
      t.string :image
      t.text :desc
      t.belongs_to :muscle, null: false, foreign_key: true

      t.timestamps
    end
  end
end
